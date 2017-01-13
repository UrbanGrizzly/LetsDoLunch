var apiCalls = require('./utils/apicalls');
var dbHandler = require('./utils/db_handler');
var utils = require('./utils/utils');

const findUserFromRequest = (request) => {
  return request.user;
}

const loadMaps = function(req, res) {
  apiCalls.googleMapsLoader()
  .then(apiResponse => {
    res.send(apiResponse);
  })
  .catch(err => {
    res.statusCode(500).send();
    throw new Error(err);
  })
}

const getPlaces = function(req, res) {
  // Accepts a query with the following fields:
  // location, radius in meters (defaults to 500m), keyword (can be multiple keywords), minprice, maxprice, opennow
  // location can be in the form of:
    // - {lat, lng}
    // - {latitude, longitude}
    // - {address} (so location.address is an address/partial address, in string form)
  // Serves JSON array of results.

  apiCalls.googlePlacesNearby(req.query)
  .then(apiResponse => {
    res.send(JSON.parse(apiResponse).results);
  })
  .catch(err => {
    res.sendStatus(500);
    throw new Error(err);
  });

}

const getDetails = function(req, res) {
  // Accepts a query with the "placeid" field, serves the details of that place.

  // Currently also using google Geocode to simulate the multiple async task functionality.

  var details = {};

  var done = utils.asyncTasks(2, () => {
    res.send(details);
  })

  apiCalls.googlePlacesDetails(req.query)
  .then(apiResponse => {
    details.yelp = JSON.parse(apiResponse).result;
    done();
  })
  .catch(err => {
    res.sendStatus(500);
    throw new Error(err);
  });

  apiCalls.googleGeocode({ address: '611 Mission, San Francisco' })
  .then(apiResponse => {
    details.geoCoding = JSON.parse(apiResponse);
    done();
  })
  .catch(err => {
    res.sendStatus(500);
    throw new Error(err);
  });

}

const getPhoto = function(req, res) {
  //accepts a query with 'photoreference' from google places result
  //returns an image
  apiCalls.googlePlacesPhoto(req.query)
  .then(apiResponse => {
    res.send(apiResponse);
  })
  .catch(err => {
    res.statusCode(500).send();
    console.error('getPhoto error!', err);
  });
}

const getPreference = function(req,res) {
  res.send();
}

const yelpNearbySearch = function(req, res) {
  let { query } = req;
  console.log('what is yelp getting in handler: ', query)
  apiCalls.yelpSearch(query)
    .then(data => {
      let yelpData = JSON.parse(data).businesses[0];
      fourSqrRating(query, res, yelpData)
    })
    .catch(err => {
      res.sendStatus(500);
      throw new Error(err);
    });
}

//start of 4sqr search
const fourSqrRating = function(query, res, yelpData) {
  apiCalls.fourSqrSearch(query)
  .then(compactData => {
    let id = JSON.parse(compactData).response.venues[0].id
    apiCalls.fourSqrVenue(id)
    .then(completeData => {
      let fourSqrRating = Math.round((JSON.parse(completeData).response.venue.rating/2)*10)/10
      yelpData['fourSqrRating']=fourSqrRating;
      res.send(yelpData)
    })
  })
}


const getUserPreferences = function(req, res) {
  // req.query = { username }
  let { query: { username }, body } = req;
  let user = findUserFromRequest(req);

  let results = {};

  let done = utils.asyncTasks(2, () => {
    res.send(results);
  })

  dbHandler.getUserPreferences(user)
  .then(data => {
    results.preferences = data;
    done();
  })
  .catch(err => {res.sendStatus(500); console.log('Error in getUserPreferences:', err); });

  dbHandler.getUserListings(user)
  .then(data => {
    // This script will sort the listings into categories (e.g. blacklist, favorites, etc)
    // And add them to the results object, which we can then send
    data.forEach(listing => {
      let { type } = listing;
      if ( !results[type] ) {
        results[type] = [listing];
      } else {
        results[type].push(listing);
      }
    });
    done();
  })
  .catch(err => {res.sendStatus(500); console.log('Error in getUserPreferences:', err); });

}

const addUserListing = function(type, req, res) {
  let { body } = req;
  let user = findUserFromRequest(req);

  // Map lat/lng to where they are matched in the database so they will be stored
  Object.assign(body, body.geometry.location);

  dbHandler.addListing(body)
  // Add listing in database if it doesn't exist (addListing will return the listing id)
  .then((listingId) => dbHandler.addUserListing(user, listingId, type))
  // Add listing in junction table
  .then((data) => res.sendStatus(200))
  .catch(err => {res.sendStatus(500); console.log('Error in addUserListing:', err); });
}

const addUserPreference = function(req, res) {
  let { user, query } = req
  dbHandler.addUserPreference(user, query)
  .then(data => res.send(data))
  .catch((err) => {
    console.error(err)
    res.sendStatus(500)
  })
}

const deleteUserPreference = function(req, res) {
  let { query: { name }} = req;
  let user = findUserFromRequest(req);

  dbHandler.deleteUserPreference(user, { name })
  .then(() => getUserPreferences(req, res)) // Will send response with new user preferences object
  .catch(err => {res.sendStatus(500); console.log('Error in deleteUserPreference:', err); });
}

const deleteUserListing = function(req, res) {

  let { query: { name }} = req;
  let user = findUserFromRequest(req);

  dbHandler.deleteUserListing(user, { name })
  .then(() => getUserPreferences(req, res)) // Will send response with new user preferences object
  .catch(err => {res.sendStatus(500); console.log('Error in deleteUserListing:', err); });
}

const addUser = function(req, res) {
  // req.body = { username, email, password, fbtoken }
  let { body } = req;
  let user = findUserFromRequest(req);

  dbHandler.addUser(body)
  .then(data => res.send(data))
  .catch(err => {res.sendStatus(500); console.log('Error in addUser:', err); });
}

const moveListing = function(destination, req, res) {
  let { body } = req;
  let user = findUserFromRequest(req);

  dbHandler.moveUserListing(user, body, destination)
  .then(() => getUserPreferences(req, res))
  .catch(err => {res.sendStatus(500); console.log('Error in moveListing:', err); });
}

const checkAuth = function({ user }, res) {
  let { username, fbname, email } = user || {};

  let userObj = {
    bool: !!user,
    username: username || fbname,
    email: email || null
  };

  res.send(userObj);
}

const logout = (req, res) => {
  req.session.destroy();
  res.send();
}

const login = (req, res) => {
  res.redirect('/search');
}

module.exports = {
  loadMaps,
  getPlaces,
  getDetails,
  getPhoto,
  getPreference,
  yelpNearbySearch,
  getUserPreferences,
  addUserListing,
  addUserPreference,
  deleteUserPreference,
  deleteUserListing,
  addUser,
  moveListing,
  checkAuth,
  logout,
  login
}

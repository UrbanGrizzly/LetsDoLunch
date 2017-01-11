var apiCalls = require('./utils/apicalls');
var dbHandler = require('./utils/db_handler');
var utils = require('./utils/utils');

const findUserFromSession = ({ sessionStore: { sessions }}) => {
  let session = typeof sessions === 'string' ? JSON.parse(sessions[Object.keys(sessions)[0]]) : null;
  return !session || !session.passport || !session.passport.user ? undefined : session.passport.user.id;
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
  apiCalls.yelpSearch(query)
    .then(data => {
      let yelpRest = JSON.parse(data).businesses[0]
      res.send(yelpRest)
      // fourSqrSearch(query, res, data)
    })
    .catch(err => {
      res.sendStatus(500);
      throw new Error(err);
    });
}

//start of 4sqr search
const fourSqrSearch = function(query,res, yelpData) {

  const allQueriesComplete = function() {
    return yelpResults.reduce((allDone, restaurant) => restaurant.isChecked && allDone ? true : false);
  }

  const restaurantMatchesUserPref = function(userPref, venuePrice, venueIsOpen) {
    if (userPref.price.length >= parseInt(venuePrice)) {
      if (userPref.time === "Now" && venueIsOpen) {
        return true;
      } else if (userPref.time === "Later" && !venueIsOpen) {
        return true;
      }
    }
    return false;
  }

  const checkIfCompleteAndSend = function() {
    if (allQueriesComplete()) {
      yelpResults = yelpResults.filter((restaurant) => restaurant.isValidLDL);
      yelpData.businesses = yelpResults;
      console.log('this is how many results we get after filtering: ', yelpResults.length);
      res.send(yelpData);
    }
  }


  const getFourSqrData = function(index, userPref, res) {
    let name = yelpResults[index].name;
    let loc = yelpResults[index].location.display_address.reduce((address, line)=>address + line + ' ');
    //this is the first call to get the exact same restaurant result by Yelp
    apiCalls.fourSqrSearch(name, loc)
      .then (data => {
        let id=(JSON.parse(data)).response.venues[0].id;
        //this is the second call to get venue details
        apiCalls.fourSqrVenue(id)
          .then(resp => {
            const fourSqrRestData = JSON.parse(resp);
            let venuePrice = fourSqrRestData.response.venue.price.tier; //this is a number;
            let venueIsOpen = fourSqrRestData.response.venue.hours.isOpen; //this is a boolean;
            if (restaurantMatchesUserPref(userPref, venuePrice, venueIsOpen)) {
              yelpResults[index].venuePrice = venuePrice;
              yelpResults[index].venueIsOpen = venueIsOpen;
              yelpResults[index].isValidLDL = true;
            }

            yelpResults[index].isChecked = true;
            checkIfCompleteAndSend();

          })
          .catch(fourSqrRestLookupError => {
              console.error('Error looking up restaurant using id', id);
              yelpResults[index].isChecked = true;
              checkIfCompleteAndSend();
          })
      })
      .catch (fourSqrIdLookupError => {
          console.error('Error finding restuarant ID')
          yelpResults[index].isChecked = true;
          checkIfCompleteAndSend();
      });
  }

  yelpData = JSON.parse(yelpData);
  let yelpResults = yelpData.businesses; //an array of results

  try {
    for (var i = 0; i < yelpResults.length; i++) {
      getFourSqrData(i, query, res);
    }
  } catch (error) {
    console.log('error', error);
    res.sendStatus(500);
  }
}


const getUserPreferences = function(req, res) {
  // req.query = { username }
  let { query: { username }, user } = req;
  if (!user) user = {username: "Valerie"};

  let fbtoken = findUserFromSession(req);

  let results = {};

  let done = utils.asyncTasks(2, () => {
    res.send(results);
  })

  dbHandler.getUserPreferences({ username, fbtoken })
  .then(data => {
    results.preferences = data;
    done();
  })
  .catch(err => {res.sendStatus(500); console.log('Error in getUserPreferences:', err); });

  dbHandler.getUserListings({ username, fbtoken })
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
  let { body, user } = req;
  if (!user) user = {username: "Valerie"};

  dbHandler.addListing(body)
  // Add listing in database if it doesn't exist (addListing will return the listing id)
  .then((listingId) => dbHandler.addUserListing(user, listingId, type))
  // Add listing in junction table
  .then((data) => res.sendStatus(200))
  .catch(() => res.sendStatus(500));
}

const deleteUserPreference = function(req, res) {
  let { query: { name }, user } = req;
  if (!user) user = {username: "Valerie"};

  let fbtoken = findUserFromSession(req);

  dbHandler.deleteUserPreference(user, { name })
  .then(() => getUserPreferences(req, res)) // Will send response with new user preferences object
  .catch(err => {res.sendStatus(500); console.log('Error in deleteUserPreference:', err); });
}

const deleteUserListing = function(req, res) {

  let { query: { name }, user } = req;
  if (!user) user = {username: "Valerie"};

  let fbtoken = findUserFromSession(req);

  dbHandler.deleteUserListing(user, { name })
  .then(() => getUserPreferences(req, res)) // Will send response with new user preferences object
  .catch(err => {res.sendStatus(500); console.log('Error in deleteUserListing:', err); });
}

const addUser = function(req, res) {
  // req.body = { username, email, password, fbtoken }
  let { body, user } = req;
  if (!user) user = {username: "Valerie"};  

  dbHandler.addUser(body)
  .then(data => res.send(data))
  .catch(err => {res.sendStatus(500); console.log('Error in addUser:', err); });
}

const moveListing = function(destination, req, res) {
  let { query, user } = req;
  if (!user) user = { username:"Valerie" }

  dbHandler.moveUserListing(user, query, destination)
  .then(() => getUserPreferences(req, res));
}

const checkAuth = function(req, res) {
  let { user } = req;
  if (user) {
    let { username = "Valerie", fbname, email } = user;
  }

  if(user) {
    res.send({
      bool: true,
      username: username || fbname,
      email: email || null
    });
  } else {
    res.send({
      bool: false,
      username: null,
      email: null
    });
  }
}

const logout = (req, res) => {
  req.session.destroy();
  res.send();
}

const login = (req, res) => {
  res.redirect('/profile');
}

module.exports = {
  loadMaps,
  getPlaces,
  getDetails,
  getPhoto,
  getPreference,
  yelpNearbySearch,
  fourSqrSearch,
  getUserPreferences,
  addUserListing,
  deleteUserPreference,
  deleteUserListing,
  addUser,
  moveListing,
  checkAuth,
  logout,
  login
}

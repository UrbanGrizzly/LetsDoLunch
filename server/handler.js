var apiCalls = require('./utils/apicalls');
var dbHandler = require('./utils/db_handler');
var utils = require('./utils/utils');

const findUserFromSession = ({ sessionStore: { sessions }}) => {
  let session = typeof sessions === 'string' ? JSON.parse(sessions[Object.keys(sessions)[0]]) : null;
  return !session || !session.passport || !session.passport.user ? undefined : session.passport.user.id;
}

module.exports.loadMaps = function(req, res) {
  apiCalls.googleMapsLoader()
  .then(apiResponse => {
    res.send(apiResponse);
  })
  .catch(err => {
    res.statusCode(500).send();
    throw new Error(err);
  })
}

module.exports.getPlaces = function(req, res) {
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

module.exports.getDetails = function(req, res) {
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

module.exports.getPhoto = function(req, res) {
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

module.exports.getPreference = function(req,res) {
  res.send();
}

module.exports.yelpNearbySearch = function(req, res) {
  let { query } = req;

  apiCalls.yelpSearch(query)
  .then(data => res.send(data))
  .catch(err => {res.sendStatus(500); throw new Error(err); });
}


module.exports.getUserPreferences = function(req, res) {
  // req.query = { username }
  let { query: { username }, user } = req;

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
    results.likes = data.filter(listing => listing.type === 'like');
    results.blacklist = data.filter(listing => listing.type === 'dislike');
    done();
  })
  .catch(err => {res.sendStatus(500); console.log('Error in getUserPreferences:', err); });

}

module.exports.deleteUserPreference = function(req, res) {
  let { query: { name }} = req;
  let user = {username: "Valerie"};

  let fbtoken = findUserFromSession(req);

  dbHandler.deleteUserPreference(user, { name })
  .then(() => module.exports.getUserPreferences(req, res)) // Will send response with new user preferences object
  .catch(err => {res.sendStatus(500); console.log('Error in deleteUserPreference:', err); });
}

module.exports.deleteUserListing = function(req, res) {

  let { query: { name }} = req;
  let user = {username: "Valerie"};

  let fbtoken = findUserFromSession(req);

  dbHandler.deleteUserListing(user, { name })
  .then(() => module.exports.getUserPreferences(req, res)) // Will send response with new user preferences object
  .catch(err => {res.sendStatus(500); console.log('Error in deleteUserListing:', err); });
}

module.exports.addUser = function(req, res) {
  // req.body = { username, email, password, fbtoken }
  let { body } = req;

  dbHandler.addUser(body)
  .then(data => res.send(data))
  .catch(err => {res.sendStatus(500); console.log('Error in addUser:', err); });
}

module.exports.checkAuth = function(req, res) {
  //right now use is always logged
  if(true) {
    res.send(true);
  } else {
    res.send(false);
  }
}

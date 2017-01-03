var apiCalls = require('./utils/apicalls');
var dbHandler = require('./utils/db_handler');

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

  apiCalls.googlePlacesDetails(req.query)
  .then(apiResponse => {
    res.send(JSON.parse(apiResponse).result);
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
  let { query: { username }} = req;

  dbHandler.getUserPreferences({ username })
  .then(data => res.send(data))
  .catch(err => {res.sendStatus(500); console.log('Error in getUserPreferences:', err); });
}

module.exports.addUser = function(req, res) {
  // req.body = { username, email, password, fbtoken }
  let { body } = req;

  dbHandler.addUser(body)
  .then(data => res.send(data))
  .catch(err => {res.sendStatus(500); console.log('Error in addUser:', err); });
}

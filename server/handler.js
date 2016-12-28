var apiCalls = require('./utils/apicalls');

module.exports.getPlaces = function(req, res) {
  // Accepts a query with the following fields: 
  // location coordinates (requires latitude and longitude, defaults to MKS's location), radius in meters (defaults to 500m), keyword (can be multiple keywords), minprice, maxprice, opennow
  // Serves JSON array of results.

  apiCalls.googlePlacesNearby(req.query)
  .then(apiResponse => {
    res.send(JSON.parse(apiResponse).results);
  })
  .catch(err => {
    res.statusCode(500).send();
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
    res.statusCode(500).send();
    throw new Error(err);
  });

}

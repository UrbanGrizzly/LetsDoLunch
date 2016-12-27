var apiCalls = require('./utils/apicalls');

module.exports.getPlaces = function(req, res) {
  // Takes a query accepting the following fields: 
  // location coordinates (requires latitude and longitude, defaults to MKS's location), radius in meters (defaults to 500m), keyword, minprice, maxprice, opennow
  // Serves JSON array of results.

  console.log(req.query);

  apiCalls.googlePlacesNearby(req.query, function(err, apiResponse) {
    res.send(JSON.parse(apiResponse).results);
  });

}

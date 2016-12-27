var request = require('request-promise-native'); // Request library with native JS promises
var dotenv = require('dotenv').config();

module.exports.googlePlacesNearby = function(query) {

  let {location, radius, keyword, minprice, maxprice, opennow} = query;
  if (location) {
    let {location: {latitude, longitude}} = query;
  }

  let url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'

  // Building a query object with our API key and default required parameters
  let qs = {
    key: dotenv.GOOGLE_PLACES_API_KEY,
    location: location ? `${latitude},${longitude}` : "37.7875116,-122.4020266",
    radius: radius || 500,
    keyword,
    minprice,
    maxprice,
    opennow
  }

  // Returning a promise
  return request.get({url, qs});

}

module.exports.googlePlacesDetails = function(query) {
  let {placeid} = query;

  let url = 'https://maps.googleapis.com/maps/api/place/details/json'

  let qs = {
    key: dotenv.GOOGLE_PLACES_API_KEY,
    placeid
  }

  // Returning a promise
  return request.get({url, qs});

}

var request = require('request-promise-native'); // Request library with native JS promises
var dotenv = require('dotenv').config();  // includes api keys

// google maps js api loader
module.exports.googleMapsLoader = function() {
  let url = 'https://maps.googleapis.com/maps/api/js'

  // build query string for api call
  let qs = {
    key: dotenv.GOOGLE_PLACE_API_KEY,
    libraries: 'geometry,place,visualization'
  }

  // return a promise
  return request.get({url, qs});
}

module.exports.googlePlacesNearby = function(query) {

  let {location, radius, keyword, minprice, maxprice, opennow} = query;


  return new Promise((resolve, reject) => { 
    // In this promise we determine the location, if location.address is provided in the query
    // we find the latitude/longitude based upon that address using google geocode, otherwise
    // we check for the latitude and longitude supplied as either {lat, lng} or {latitude, longitude}.
    // if no location info given, we default to pyongyang. If you receive Korean search results,
    // that's why.
    
    // This promise returns the coordinate string Google wants (format "[latitude],[longitude]").

    if (location && location.address) {
      let {address} = location;

      googleGeocode({address})
      .then(data => {
        let {results:[{geometry, geometry:{location, location:{lat, lng}}}]} = JSON.parse(data);
        resolve(`${lat},${lng}`);
      })
      .catch(err => console.log('googleGeoCode Error:', err));

    }
    else if (location) {
      let {location: {lat, lng, latitude, longitude}} = query;
      resolve(lat ? `${lat},${lng}` : `${latitude},${longitude}`);
    }
    else {
      resolve("39.0336731,125.7561013"); // Pyongyang coordinates are default if no location specified, so if you get Korean search results, you're not sending the location info correctly :) 
    }
  })
  .then(locationString => {

    let url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

    // Building a query object with our API key and default required parameters
    let qs = {
      key: dotenv.GOOGLE_PLACES_API_KEY,
      location: locationString,
      radius: radius || 500,
      keyword,
      minprice,
      maxprice,
      opennow
    };

    // Returning a promise
    return request.get({url, qs});

  })
  .catch(err => console.log('googlePlacesNearby Error:', err));

}

module.exports.googlePlacesDetails = function(query) {
  let {placeid} = query;

  let url = 'https://maps.googleapis.com/maps/api/place/details/json';

  let qs = {
    key: dotenv.GOOGLE_PLACES_API_KEY,
    placeid
  };

  // Returning a promise
  return request.get({url, qs});

}

function googleGeocode(query) {
  let {address} = query;

  let url = 'https://maps.google.com/maps/api/geocode/json';

  let qs = {
    key: dotenv.GOOGLE_PLACES_API_KEY,
    address
  };

  return request.get({url, qs});

}

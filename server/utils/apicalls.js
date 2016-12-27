var http = require('http');
var https = require('https');
var request = require('request');
var dotenv = require('dotenv').config();

module.exports.googlePlacesNearby = function(query, callback) {
  let {location, radius, keyword, minprice, maxprice, opennow} = query;
  if (location) {
    let {location: {latitude, longitude}} = query;
  }

  let url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'

  let qs = {
    key: dotenv.GOOGLE_PLACES_API_KEY,
    location: location ? `${latitude},${longitude}` : "37.7875116,-122.4020266",
    radius: query.radius || 500,
    keyword,
    minprice,
    maxprice,
    opennow
  }

  request.get({url, qs}, function(err, res, body) {
    if (err) throw new Error(err);
    res.setEncoding('utf8');
    callback(err, body);
  });
}

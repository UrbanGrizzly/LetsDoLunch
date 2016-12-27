var handler = require('./handler.js');

module.exports = function(app) {

  app.get('/api/places', handler.getPlaces);

}

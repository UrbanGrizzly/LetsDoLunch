var handler = require('./handler.js');

module.exports = function(app) {

  app.get('/api/loadMaps', handler.loadMaps);

  app.get('/api/places', handler.getPlaces);

  app.get('/api/details', handler.getDetails);

  app.post('/search/preference', handler.getPreference);

}

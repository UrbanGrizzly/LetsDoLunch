var handler = require('./handler.js');

module.exports = function(app) {

  app.get('/api/loadMaps', handler.loadMaps);

  app.get('/api/places', handler.yelpNearbySearch);

  app.get('/api/details', handler.getDetails);

  app.get('/api/photo', handler.getPhoto);

  app.get('/db/userpreferences', handler.getUserPreferences);

  app.post('/db/users', handler.addUser);

  app.post('/search/preference', handler.getPreference);

}

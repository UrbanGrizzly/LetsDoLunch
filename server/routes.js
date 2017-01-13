var handler = require('./handler.js');
var passport = require('passport');

module.exports = function(app) {

  app.get('/api/loadMaps', handler.loadMaps);

  app.get('/api/yelp', handler.yelpNearbySearch);

  app.get('/api/details', handler.getDetails);

  app.get('/api/photo', handler.getPhoto);

  app.get('/db/userpreferences', handler.getUserPreferences);

  app.delete('/db/userpreferences', handler.deleteUserPreference);

  app.post('/db/userpreferences', handler.addUserPreference);

  app.delete('/db/userlistings', handler.deleteUserListing);

  app.post('/db/userfavorites', handler.addUserListing.bind(null, 'favorite'));

  app.post('/db/userwishlist', handler.addUserListing.bind(null, 'wishlist'));

  app.post('/db/uservisited', handler.addUserListing.bind(null, 'visited'));

  app.post('/db/userblacklist', handler.addUserListing.bind(null, 'blacklist'));

  app.post('/db/movetoblacklist', handler.moveListing.bind(null, 'blacklist'));

  app.post('/db/movetofavorites', handler.moveListing.bind(null, 'favorite'));

  app.post('/db/users', handler.addUser);

  app.post('/search/preference', handler.getPreference);

  app.post('/db/adduserpreference', handler.addUserPreference);

  app.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}));

  app.get('/auth/facebook/callback', passport.authenticate('facebook'), handler.login);

  app.get('/auth/check', handler.checkAuth);

  app.get('/auth/logout', handler.logout);

}

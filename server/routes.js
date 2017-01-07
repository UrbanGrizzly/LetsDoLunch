var handler = require('./handler.js');
var passport = require('passport');

module.exports = function(app) {

  app.get('/api/loadMaps', handler.loadMaps);

  app.get('/api/places', handler.yelpNearbySearch);

  app.get('/api/details', handler.getDetails);

  app.get('/api/photo', handler.getPhoto);

  app.get('/db/userpreferences', handler.getUserPreferences);

  app.delete('/db/userpreferences', handler.deleteUserPreference);

  app.delete('/db/userlistings', handler.deleteUserListing);

  app.post('/db/users', handler.addUser);

  app.post('/search/preference', handler.getPreference);

  app.get('/auth/facebook', passport.authenticate('facebook'));

  app.get('/auth/facebook/callback', passport.authenticate('facebook'),
    function(req, res) {
      console.log('in fb callback', req.user);
      res.redirect('/dog')
  });

  app.get('/auth/check', handler.checkAuth);

  app.get('/auth/logout', function(req, res) {
    req.session.destroy();
    res.send();
  });
}

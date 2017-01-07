var handler = require('./handler.js');
var passport = require('passport');

module.exports = function(app) {

  app.get('/api/loadMaps', handler.loadMaps);

  app.get('/api/places', handler.yelpNearbySearch);

//start of 4sqr search
  app.get('/api/timeprice', handler.fourSqrSearch);

  app.get('/api/details', handler.getDetails);

  app.get('/api/photo', handler.getPhoto);

  app.get('/db/userpreferences', handler.getUserPreferences);

  app.post('/db/users', handler.addUser);

  app.post('/search/preference', handler.getPreference);

  app.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}));

  app.get('/auth/facebook/callback', passport.authenticate('facebook', {scope: 'email'}), 
    function(req, res) {
      res.redirect('/dog')
  });

}

var dbHandler = require('../utils/db_handler.js')

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
var passport = require('passport')
var Strategy = require('passport-facebook').Strategy;

module.exports = () => {
  passport.use(new Strategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'email']
  },
  function(accessToken, refreshToken, profile, cb) {
    let user = {
      username: null,
      email: profile._json.email,
      password: null,
      fbtoken: profile.id,
      fbname: profile.displayName
    }
    cb(null, user);
    dbHandler.addUser(user, accessToken);
  }));
}

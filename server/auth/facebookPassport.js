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
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
    let user = {
      username: null,
      email: null, 
      password: null,
      fbtoken: accessToken,
      fbname: profile.displayName
    }
    console.log(profile)
    dbHandler.addUser(user, accessToken);
    cb(null, profile);
  }));
}

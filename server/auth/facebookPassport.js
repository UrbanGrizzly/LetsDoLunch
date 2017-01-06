if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

module.exports = ({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    cb(null, profile);
  });
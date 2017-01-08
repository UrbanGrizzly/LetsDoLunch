

// configure server
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackConfig = require('../webpack.config.js');
var passport = require('passport');
var facebookPassport = require('./auth/facebookPassport.js')
var routes = require('./routes.js');

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

facebookPassport();

var port = process.env.PORT || 3000;
var app = express();

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//stuff to make passport work
app.use(require('express-session')({ 
  secret: 'yes, this is dog', 
  resave: true, 
  saveUninitialized: true,
  maxAge: 36000000
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

routes(app);

var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/",
  stats: {
    // Config for minimal console.log mess.
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  }
}));


// serve static files
app.use(express.static(path.join(__dirname, '../dist')));


// re-configuring for react-router browserHistory:
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
})

// start server
app.listen(port, () => console.log("Listening on port", port));

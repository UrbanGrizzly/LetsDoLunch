

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

var port = process.env.PORT || 3000;
var app = express();


// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

passport.use(facebookPassport);

routes(app);

var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/"
}));


// serve static files
app.use(express.static(path.join(__dirname, '../dist')));

// re-configuring for react-router browserHistory:
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
})

// start server
app.listen(port, () => console.log("Listening on port", port));

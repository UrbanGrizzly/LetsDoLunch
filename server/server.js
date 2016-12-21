// configure server
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackConfig = require('../webpack.config.js')


var port = 3000;
var app = express();


// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/"
}));


// serve static files
app.use(express.static(path.join(__dirname, '../dist')));

// start server
app.listen(3000, () => console.log("Listening on port", port));

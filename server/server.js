// configure server
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var port = 3000;
var app = express();

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// serve static files
app.use(express.static(path.join(__dirname, '../client')));

// start server
app.listen(3000, () => console.log("Listening on port", port));

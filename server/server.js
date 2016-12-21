var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('../client'));

app.listen(3000, () => console.log("Listening on port", port));

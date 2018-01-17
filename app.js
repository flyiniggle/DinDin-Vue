// Imports
var path = require('path');

var express = require('express');
var bodyParser = require("body-parser");


// Setup
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({}));


// Routes for static files

// Routes for modules
app.use("/meals", function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send({greeting: "haaaiiiiiii!!!!"});
});

app.listen(3090, function() {
	console.log("I hear you at http://localhost:3090"); // eslint-disable-line no-console
});

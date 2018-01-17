// Imports
const fs = require("fs");

const express = require('express');
const bodyParser = require("body-parser");


// Setup
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({}));


// Routes for static files

// Routes for modules
app.get("/meals", function(req, res) {
  new Promise(function(resolve, reject) {
    fs.readFile("./data/meals.json", (err, data) => {
      if(err) reject(err);
      resolve(data)
    });
  })
    .then(JSON.parse)
    .then(function(data) {
      res.setHeader('Content-Type', 'application/json');
      res.send(data);
    })
    .catch(function(err) {
      console.log(err);
      res.writeHead(400, {'Content-Type': 'application/json'});
      res.send(err);
    })
});

app.listen(3090, function() {
	console.log("I hear you at http://localhost:3090"); // eslint-disable-line no-console
});

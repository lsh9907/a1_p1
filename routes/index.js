var express = require('express');
var app = express.Router();

/* GET Home page. */
app.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* GET Contact Me page. */
app.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Contact Me' });
});

// make this file visible within the rest of the application
module.exports = app;

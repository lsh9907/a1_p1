/* Connect and activate Express.js */
var express = require('express');
var app = express.Router();

/* GET Home page with title */
app.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* GET About Me page with a title */
app.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About Me' });
});

/* GET Projects page with a title */
app.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET Services page with a title */
app.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET Contact Me page with a title */
app.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Contact Me' });
});

// Make this file visible within the rest of the application
module.exports = app;

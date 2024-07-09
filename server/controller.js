var client = require('./mongo_client'),
  request = require('request');

module.exports = {
  index: function (req, res) {
    res.send('index');
  },
  processLogin: function (req, res) {
    res.redirect('/');
  },
  addMovie: function (req, res) {
    res.redirect('/');
  },
  watchedMovie: function (req, res) {
    res.json('success');
  },
};

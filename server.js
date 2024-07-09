var express = require('express'),
  configure = require('./server/configure'),
  _ = require('underscore'),
  mongodb = require('./server/mongo_client'),
  app = express();

app = configure(app);

var server = app.listen(app.get('port'), function () {
  console.log('Web server up: http://localhost:' + app.get('port'));

  // mongodb.connect('mongodb://localhost:27017/moviedb', function () {
  //   console.log('Connected to DB');
  // });
});

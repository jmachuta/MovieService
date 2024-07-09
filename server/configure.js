var path = require('path'),
  routes = require('./routes'),
  express = require('express'),
  cookieParser = require('cookie-parser'),
  session = require('express-session'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  morgan = require('morgan');

module.exports = function (app) {
  app.set('port', process.env.PORT || 3000);

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser('secret-key'));
  app.use(
    session({
      secret: 'secret-key',
      saveUninitialized: true,
      resave: true,
    })
  );

  app.use('/public/', express['static'](path.join(__dirname, '/public')));

  routes.initialize(app, new express.Router());

  return app;
};

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./server/routes/index');
var users = require('./server/routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, './server/views'));
//app.set('view engine', 'ejs');
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
setwebpack(app);

//app.use('*', index);
app.use(express.static(path.join(__dirname, './client/public')));
app.use('/test', require('./server/routes/test'));
app.use('*', index);

//app.use('/VC', contro);
//app.use('/VR', router);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




function setwebpack(app){
  var webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
  //webpackHotMiddleware = require('webpack-hot-middleware'),
    webpackDevConfig = require('./webpack.config.js');

  var compiler = webpack(webpackDevConfig);

// attach to the compiler & the server

  var options={
    publicPath: webpackDevConfig.output.publicPath,
    watchOptions: {
      aggregateTimeout: 2e3,
      poll: true
    },
    noInfo: false,
    lazy: true
  }
  var optins2= {

    // public path should be the same with webpack config
    publicPath: webpackDevConfig.output.publicPath,
    noInfo: true,
    stats: {
      colors: true
    }
  }
  app.use(webpackDevMiddleware(compiler,options));
}
//app.use(webpackHotMiddleware(compiler))

require('./test');
module.exports = app;

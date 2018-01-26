var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');



var config=require('./cfg');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, './server/views'));
//app.set('view engine', 'ejs');
app.engine('html', require('swig').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

//add middleware
var mwConfig=config.get('app.middleware');
require('./server/lib/middleware')(app,mwConfig);




/*app.use(function(req,res,next){

  console.log('req.sessionID',req.sessionID);

  console.log(req.session);
  console.log(req.cookies);
  console.log('req.signedCookies ',req.signedCookies);
  res.cookie('cart','nihao', { signed: true })
    req.session.loginUser='nihaoaoao';
  if(!req.session){
    next(new Error("Session GateWay Error"));
    return;
  }
  next();
});*/


//add router middleware
var router=require('./server/router');
//add webpack middleware
setwebpack(app);

app.use(router);


app.use('/static',express.static(path.join(__dirname, './client/public')));









function setwebpack(app){
  if(!config.get('app.webpack'))return
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


module.exports = app;


var middleware={
  session:require('./session'),
  bodyParser:require('./bodyParser'),
  cookieParser:require('./cookieParser')
}

/*
* app 应用实例
* config：所有中间节的配置
* */
module.exports= function(app,config){
  app.use(middleware.bodyParser(config.bodyParser))   //添加HTTP请求体解析中间件
  app.use(middleware.cookieParser(config.cookieParser)) //添加HTTPcookie解析中间件
  app.use(middleware.session(config.session)) //添加 session解析中间件
//  middleware.session(app,config.session)
}
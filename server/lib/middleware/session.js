/**
 * Created by danlu on 2018/1/18.
 */
var session = require('express-session');
var FileStore = require('session-file-store')(session);

module.exports= function(conf){
  var name =conf.name|| 'JSSESSION';
  var store=conf.store||{};
  var secret=conf.secret||"FA_SESSION"
  console.log(secret);

  return session({
    name: name,
    secret: secret,  // 用来对session id相关的cookie进行签名
    store: new FileStore(store),  // 本地存储session（文本文件，也可以选择其他store，比如redis的）
    saveUninitialized: false,  // 是否自动保存未初始化的会话，建议false
    resave: false,  // 是否每次都重新保存会话，建议false
    cookie: {
      "secure": false
    }
  })
}










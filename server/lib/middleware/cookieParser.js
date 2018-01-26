
var cookieParser = require('cookie-parser');
module.exports= function(conf){
  if(conf&&conf.secret){
    return cookieParser(conf.secret)
  }
  return cookieParser()
}

var bodyParser = require('body-parser');
module.exports= function(conf){
  var json=bodyParser.json(conf.json||null);
  var urlencoded=bodyParser.urlencoded(conf.urlencoded||null)
  return [json,urlencoded]
}
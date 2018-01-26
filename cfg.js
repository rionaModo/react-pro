

process.env.NODE_CONFIG_DIR=[__dirname,'server', 'config'].join('/')
var config=require('config');
var port=config.get('app.port');
process.env.PORT=port;

module.exports = config;


//require('./server/library/request');
//process.env.src_dir=portrer;
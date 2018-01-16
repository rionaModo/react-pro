process.env.NODE_CONFIG_DIR=[__dirname,'server', 'config'].join('/')
var config=require('config');
var port=config.get('port');
console.log('sss');
console.log(port);
process.env.PORT=port;
//require('./server/library/db/collect.js');
//process.env.src_dir=portrer;


require('./server/library/request');
//process.env.src_dir=portrer;
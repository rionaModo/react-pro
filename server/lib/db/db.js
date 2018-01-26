
var mongoose=require('mongoose');
var config=require('config');

mongoose.connect(config.get('app.mongodb.url'),config.get('app.mongodb.options')||{},function(err){
    if(err){
        console.log('链接失败:',err);
    }
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open',function(){
    console.log('db is open');

});
module.exports=db;
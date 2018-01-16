/**
 * Created by riona on 2017/12/17.
 */
var mongoose=require('mongoose')



mongoose.connect('mongodb://localhost:27017/softapp');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log('open');
    var Schema =  mongoose.Schema({name:String});
 /*  kittySchema.methods.speak = function () {
        var greeting = this.name
            ? "Meow name is " + this.name
            : "I don't have a name"
        console.log(greeting);
    }
    var Kitten = mongoose.model('users', kittySchema);
    var fluffy = new Kitten({ name: 'fluffy' });
     fluffy.save(function (err, fluffy) {
     if (err) return console.error(err);
     fluffy.speak();
     });*/
  var test=db.model('test',Schema,'test');
  //var mongoModel = mongoose.model('test', Schema);
  var PersonModel = db.model('test');
  PersonModel.findById("5a4443c98f1ddf5aa00fb84f",function (err, kittens) {
    kittens.name="lxhcahnges";
    var _id = kittens._id; //需要取出主键_id
    delete kittens._id;    //再将其删除
    PersonModel.update({_id:_id},kittens,function(err){});
    PersonModel.find(function(err,ss){

      console.log(ss);
    });

    })
});
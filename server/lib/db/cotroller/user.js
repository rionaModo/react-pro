
const mongoose=require('mongoose');
//var db = mongoose.connection;
const action={
  index:function(Schema){
   var opx=function(req,res,next,call) {
  //  res.json(fluffy);
    return opx;
   }
  },
   userInfo:function(model,db){
       console.log('userInfo is open');
    var users=model;
    var opx=function(req,res,next,call){
     users.find(function (err, fluffy) {
      call(fluffy);
      res.json(fluffy);
     })
    }
    return opx;
   }
}

module.exports=action;



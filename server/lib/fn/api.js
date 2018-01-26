



//module.exports = router;
module.exports = function(req, res, next) {
    console.log('api is open');
  var params=req.params;
  if(params&&params.c){
   var collect=require('../db')(req,res,next);
  }else{
    res.json({
      status:-1,
      msg:"操作失败!"
    });
  }
};
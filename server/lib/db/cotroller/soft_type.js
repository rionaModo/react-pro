/**
 * Created by danlu on 2018/1/24.
 */

const mongoose=require('mongoose');

const action={
  create:function(model,db){
    console.log('soft_type.create is open');
    var opx=function(req,res,next,call){
      var params=Object.assign({},req.query,req.body);
      var data={
        soft_parent_code:params.soft_parent_code||"0",
        soft_name:params.soft_name||'',
        soft_status:params.soft_status //'启用状态(0：未启用，1：启用)',
      };
      var entity=new model(data)
      entity.validate(function(err) {
        console.log(err); // Will tell you that null is not allowed.
      });
      model.find({soft_parent_code:data.soft_parent_code,soft_name:data.soft_name},function(err,list){
        if(!err){
          if(list.length>0){
            res.json({
              status:0,
              data:{
                type:1,
                msg:'"'+data.soft_name+'"重复'
              }
            });
          }else {
            entity.save((err, fluffy) =>{
              if(!err){
              call(fluffy);
              res.json(fluffy);
            }else{
              res.json({
                status:0,
                data:{
                  type:-1,
                  msg:'保存失败！'
                }
              });
            }
          })
          }
        }else {
          console.log('验重失败！');
        }
      })
    }
    return opx;
  },
  update:function(model,db){
    console.log('soft_type.update is open');
    var opx=function(req,res,next,call){
      var params=Object.assign({},req.query,req.body);
      var data={
        id:params.id,
        soft_name:params.soft_name
      };

      model.update({ _id: params.id }, { $set: { soft_name:params.soft_name }}, function(err,up){
        res.json(up);
      });

    }
    return opx;
  },
  gettype:function(model,db){
    console.log('soft_type.delete is open');
    var opx=function(req,res,next,call){
      var params=Object.assign({},req.query,req.body);

      var query={
        soft_status:1 //'启用状态(0：未启用，1：启用)',
      }
      if(params.soft_parent_code){
        query.soft_parent_code=params.soft_parent_code
      }
      if(params.soft_name){
        query.soft_name=params.soft_name
      }
      if(params.soft_code){
        query.soft_code=params.soft_code
      }
      model.find(query,function(err,list){
        res.json(list);
      })
    }
    return opx;
  },
}

module.exports=action;



var express = require('express');
var router = express.Router();
var request = require('request');
var fs = require('fs');
/* GET home page. */
router.get('/test', function(req, res, next) {
  console.log('test');
   //req.pipe(request.put('http://localhost:9000/images/doodle.png')).pipe('./doodlewww.png')
  //res.render('index', { title: 'Express' });


   //var x = request('http://mysite.com/doodle.png')
   var writeStream = fs.createWriteStream('image.png');
    req.pipe(writeStream);
   //var j=request.get('http://localhost:9000/images/doodle.png');
  // j.pipe(res);
    //x.pipe(resp)

});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('*', function(req, res, next) {
  console.log('index');
  res.render('index', { title: 'Express' });

});

//module.exports = router;
module.exports = function(req, res, next) {
  console.log('render index is ok');
      res.render('index', { title: 'Express' });
};
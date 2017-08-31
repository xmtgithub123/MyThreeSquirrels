var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'H5' });
});
router.get('/ThreeSquirrels', function(req, res, next) {
  res.render('ThreeSquirrels', { title: '三只松鼠' });
});

module.exports = router;

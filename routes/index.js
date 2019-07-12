var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'L-EARN' });
});
router.get('/event', function(req, res, next) {
  res.render('event', { title: 'L-EARN' });
});
router.get('/content', function(req, res, next) {
  res.render('content', { title: 'L-EARN' });
});


module.exports = router;

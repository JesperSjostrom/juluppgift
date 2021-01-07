var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/summary', function(req, res, next) {
  res.render('summary', { title: 'Notes' });
});

module.exports = router;

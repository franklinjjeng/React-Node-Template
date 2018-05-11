var express = require('express');
var router = express.Router();
var app = express();

router.route('/').get(function(req, res, next) {
  res.send('TEST API - GET Hello');
});

router.route('/').post(function(req, res, next) {
  res.send('TEST API - POST Hello');
});

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("1")
  next();
});

router.get('/', function(req, res, next) {
  console.log("2");
  next();
});

module.exports = router;

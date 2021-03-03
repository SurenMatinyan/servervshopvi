const express = require('express');
const router = express.Router();
const usersController = require('../controlers/users.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("1")
});

router.post('/', usersController.login);

module.exports = router;

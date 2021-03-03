const express = require('express');
const router = express.Router();
const userController = require("../controlers/users.controller")


router.post("/login", userController.login);

router.post("/signup", userController.signup);


module.exports = router;


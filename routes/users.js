const express = require('express');
const router = express.Router();
const userController = require("../controlers/users.controller")
const authentication = require('../middlewares/auth');


router.post("/login", userController.login);

router.post("/signup", authentication, userController.signup);

router.get('/auth', authentication, (req, res) =>{
    const userAuth = req.user;
    res.json(userAuth);
})


module.exports = router;


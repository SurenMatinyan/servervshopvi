const express = require('express');
const router = express.Router();
const productController = require("../controlers/product.controller");




router.post("/create", productController.createProduct);


module.exports = router;


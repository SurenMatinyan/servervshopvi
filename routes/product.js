const express = require('express');
const router = express.Router();
const productController = require("../controlers/product.controller");



router.get('/', productController.getProduct);

router.get('/item', productController.getProductItem);

router.post("/create", productController.createProduct);


module.exports = router;


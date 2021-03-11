const express = require('express');
const router = express.Router();
const productController = require("../controlers/product.controller");



router.get('/', productController.getProduct);

router.get('/news', productController.getNewsProduct);

router.get('/:category', productController.getProduct);

router.get('/children', productController.getProduct);

router.get('/item/:id', productController.getProductItem);


router.post("/", productController.createProduct);



module.exports = router;


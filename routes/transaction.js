const express = require('express');
const router = express.Router();
const transactionController = require('../controlers/transaction.controller');




router.patch('/basket', transactionController.addBasket);

router.get('/basket', transactionController.getTransaction);

module.exports = router;
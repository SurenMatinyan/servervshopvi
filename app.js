const express = require('express');
const path = require('path');
const cors = require("cors");
const cookieParser = require('cookie-parser')
require("./configDb");


//const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productRouter = require("./routes/product");
const auth = require('./middlewares/auth');
const transactionRouter = require('./routes/transaction');

const app = express();
app.listen(5050);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.use('/api/transaction', auth, transactionRouter);
app.use('/api/users', usersRouter);
app.use("/api/products", productRouter);


module.exports = app;


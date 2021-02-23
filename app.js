const express = require('express');
const path = require('path');
const cors = require("cors");
require("./configDb");


//const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authorization = require("./routes/auth");
const productRouter = require("./routes/product");

const app = express();
app.listen(5050);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);

app.use("/", authorization);
app.use('/users', usersRouter);
app.use("/products", productRouter);

module.exports = app;


const express = require('express');
const path = require('path');
const cors = require("cors");
const cookieParser = require('cookie-parser')
require("./configDb");


//const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productRouter = require("./routes/product");
const auth = require('./middlewares/auth');

const app = express();
app.listen(5050);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());


//app.use('/', indexRouter);

app.use('/users', usersRouter);
app.use("/products", productRouter);


module.exports = app;


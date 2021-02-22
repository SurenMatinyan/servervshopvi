const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/DB"

const connect = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(res => {
    console.log("connected DB");
  }).catch(err => {
    console.error(err.message);
  });

  module.exports = connect;
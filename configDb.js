const mongoose = require("mongoose");
const url = "mongodb+srv://example:example123@cluster0.mp4bd.mongodb.net/shop?authSource=admin&replicaSet=atlas-4kvxp2-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"

const connect = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(res => {
    console.log("connected DB");
  }).catch(err => {
    console.error(err.message);
  });

  module.exports = connect;

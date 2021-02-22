const mongoose = require("mongoose");
const { Schema } = mongoose;


const UserModel = new Schema({
    name: String,
    lastname: String,
    email: String,
    password: String,
});

module.exports = mongoose.model('User', UserModel);
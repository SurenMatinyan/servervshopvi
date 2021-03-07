const mongoose = require("mongoose");
const { Schema } = mongoose;


const UserModel = new Schema({
    name: String,
    lastname: String,
    email: String,
    mobile: Number,
    password: String,
    balanse: Number,
    products: {
        pendding: [],
        completion: [],
    },
});

module.exports = mongoose.model('User', UserModel);
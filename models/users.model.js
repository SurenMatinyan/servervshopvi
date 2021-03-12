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
        basket: [{type: Schema.Types.ObjectId, ref: "Product"}],
    },
});

module.exports = mongoose.model('User', UserModel);
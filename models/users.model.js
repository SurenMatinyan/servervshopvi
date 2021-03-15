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
        basket: [{item: {type: Schema.Types.ObjectId, ref: "Product"}, quantity: { type: Number, default: 1 }}],
    }

});

module.exports = mongoose.model('User', UserModel);
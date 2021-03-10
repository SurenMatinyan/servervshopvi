const mongoose = require("mongoose");
const { Schema } = mongoose;


const ProductModel = new Schema({
    name: String,
    price: Number,
    comment: String,
    color: String,
    imgURL: String,
    category: [],
});

module.exports = mongoose.model('Product', ProductModel);
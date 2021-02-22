const mongoose = require("mongoose");
const { Schema } = mongoose;


const ProductModel = new Schema({
    name: String,
    price: Number,
    comment: String,
    color: String,
    category: String, 

});

module.exports = mongoose.model('Product', ProductModel);
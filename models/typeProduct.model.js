const mongoose = require("mongoose");
const { Schema } = mongoose;


const TypeProducctModel = new Schema({
    product: {type: Schema.Types.ObjectId, ref: "Product"}
});


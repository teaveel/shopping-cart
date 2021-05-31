const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true
    },
    category : String,
    brand : { 
        type : String,
        required : true
    },
    description : String

})

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
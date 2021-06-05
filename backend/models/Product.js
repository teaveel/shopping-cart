const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    brand: String,
    category: String,
    description: String,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

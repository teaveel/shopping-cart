const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const checkoutSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  comment: String,
  shipDiff: {
    type: Boolean,
    required: true,
  },
  cartItems: [
    {
      _id: { type: Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
    },
  ],
  paymentType: {
    type: String,
    required: true,
  },
});

const Checkout = mongoose.model("Checkout", checkoutSchema);
module.exports = Checkout;

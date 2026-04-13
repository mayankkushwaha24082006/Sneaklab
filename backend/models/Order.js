const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  customer: { firstName: String, lastName: String, email: String, phone: String, address: String, city: String, pin: String, state: String },
  items: [{ id: Number, title: String, brand: String, price: Number, img: String }],
  subtotal: Number, delivery: Number, tax: Number, total: Number,
  status: { type: String, default: "placed" }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
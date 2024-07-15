const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  OrderId: Number,
  customerEmail: String,
  amount: Number,
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;

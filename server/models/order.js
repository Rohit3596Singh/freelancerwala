const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userInfo: {
    name: String,
    phone: String,
    email: String,
  },
  cart: [
    {
      name: String,
      price: Number,
      quantity: Number,
      image: String,
    },
  ],
  totalAmount: Number,
  paymentStatus: { type: String, default: "Pending" },
}, { timestamps: true });

// export default mongoose.model("Order", OrderSchema);

const Order = mongoose.model("Order",OrderSchema);
module.exports = Order;

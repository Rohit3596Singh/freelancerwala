const express = require('express');
const Order = require('../models/order');

const router = express.Router();

// Save Order Data Before Payment
router.post("/create-order", async (req, res) => {
  try {
    const { userInfo, cart, totalAmount,token } = req.body;

    const newOrder = new Order({
      userInfo,
      cart,
      totalAmount,
      token,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;  // ✅ Correct export for Node.js

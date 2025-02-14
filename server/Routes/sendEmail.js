const express = require("express");
const sendEmail = require("../utils/middleSendEmail"); // Import email function

const router = express.Router();

router.post("/send-confirmation-email", async (req, res) => {
  try {
    const { name, email, totalAmount } = req.body;

    if (!name || !email || !totalAmount) {
      return res.status(400).json({ error: "Missing required fields!" });
    }

    const subject = "✅ Order Confirmation - Your Order is Placed!";
    const text = `Hello ${name},\n\nYour order has been successfully placed! 🎉\n\n🔹 Order Details:\n- Total Amount: ₹${totalAmount}\n- Payment Status: Pending\n\nWe will notify you once your order is shipped!\n\nThanks for shopping with us! 🛍️`;

    await sendEmail(email, subject, text);

    res.status(200).json({ message: "Confirmation email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send confirmation email." });
  }
});

module.exports = router;

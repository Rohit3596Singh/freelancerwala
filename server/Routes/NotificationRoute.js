const express = require("express");
const router = express.Router();
const Notification = require("../models/Notifications"); // Assuming you have a model

// Fetch all notifications
router.get("/notifications", async (req, res) => {
  try {
    const notifications = await Notification.find().sort({ createdAt: -1 });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: "Server error while fetching notifications" });
  }
});

// Delete a notification
router.delete("/notifications/:id", async (req, res) => {
  try {
    await Notification.findByIdAndDelete(req.params.id);
    res.json({ message: "Notification deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting notification" });
  }
});

module.exports = router;

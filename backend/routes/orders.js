const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post("/", async (req, res) => {
  try {
    const { customer, items, subtotal, delivery, tax, total } = req.body;
    if (!customer || !items || items.length === 0) {
      return res.status(400).json({ error: "Missing order data" });
    }
    const orderId = "#SL-" + Math.floor(100000 + Math.random() * 900000);
    const order = await Order.create({ orderId, customer, items, subtotal, delivery, tax, total });
    res.status(201).json({ success: true, orderId: order.orderId });
  } catch (err) {
    console.error("Order error:", err);
    res.status(500).json({ error: "Failed to place order" });
  }
});

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 }).limit(50);
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

module.exports = router;

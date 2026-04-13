const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend")));

const ordersRouter = require("./routes/orders");
app.use("/api/orders", ordersRouter);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "index.html"));
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ DB Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

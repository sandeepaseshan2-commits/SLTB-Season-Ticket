const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route (health check)
app.get("/health", (req, res) => {
  res.json({ status: "Backend is running fine " });
});

// Receive season ticket application
app.post("/apply", (req, res) => {
  console.log("Received application:", req.body);

  res.json({
    message: "Application received successfully",
    data: req.body,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});

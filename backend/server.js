const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/api/data", (req, res) => {
  res.json({
    message: "Hello from backend!",
    items: [1, 2, 3, 4],
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

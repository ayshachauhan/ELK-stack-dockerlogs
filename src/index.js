// server.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log("API hit!");
  res.send("Hello");
});

app.listen(3000, () => console.log("Server running"));
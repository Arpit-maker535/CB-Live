// app.js
const express = require("express");
const basicAuth = require("./basicAuth");
const logger = require("./logger");

const app = express();

// Use the logger middleware for all routes
app.use(logger);

// Apply the basicAuth middleware only to the /protected route
// curl --location 'http://localhost:3000/protected' \
// --header 'Authorization: Bearer xxxx'
app.use("/protected", basicAuth);

// Public route
//curl http://localhost:3000/public

app.get("/public", (req, res) => {
  res.send("This is a public route.");
});

// Protected route
app.get("/protected", (req, res) => {
  res.send("This is a protected route.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

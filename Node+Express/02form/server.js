// npm init -y
// npm install express body-parser

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static HTML file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Handle form submission
app.post("/submit", (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;

  // You can process the data here (e.g., save to a database)
  console.log(`Name: ${name}, Phone: ${phone}`);

  // Send a response to the client
  res.send(`Form submitted successfully!<br>Name: ${name}<br>Phone: ${phone}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

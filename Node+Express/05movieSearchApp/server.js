// npm init -y
// npm install express axios

const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();
const port = 3000;
const apiKey = "a1f5c4a6";

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Serve the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Route to handle search requests
app.get("/search", async (req, res) => {
  const query = req.query.query;
  try {
    const response = await axios.get(`http://www.omdbapi.com/`, {
      params: {
        apikey: apiKey,
        s: query,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching data from OMDB API");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

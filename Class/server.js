const express = require("express");
const app = express();
const axios = require("axios");
const path = require("path");
const port = 3000;
const apiKey = "a1f5c4a6";

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/search", async (req, res) => {
  const name = req.query.query;
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: apiKey,
      s: name,
    },
  });

  return res.status(200).json(response.data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

const express = require("express");
const basicAuth = require("./auth");
const logger = require("./logger");
const app = express();
const port = 3000;

app.use(express.json());

app.use(logger);

app.get("/public", (req, res) => {
  return res.send("THIS IS PUBLIC API");
});

app.get("/protected", basicAuth, (req, res) => {
  return res.send("THIS IS protected API");
});

app.listen(port, () => {
  console.log("SERVER STARTED", port);
});

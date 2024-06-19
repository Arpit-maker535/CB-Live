const express = require("express");

const app = express();
const port = 3000;

app.use(express.json()); // Parse Json Bodies

let items = [];
let idCounter = 1;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/items", (req, res) => {
  res.json(items);
});

app.post("/items", (req, res) => {
  const newItem = {
    id: idCounter++,
    name: req.body.name,
  };
  items.push(newItem);
  res.status(201).json(items);
});

app.listen(port, () => {
  console.log(`SERVER RUNNING AT http://localhost:${port}/ `);
});

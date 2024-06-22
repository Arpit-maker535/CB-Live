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
  return res.status(201).json(items);
});

//REQUEST PARAMS
app.put("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((item) => item.id == id);
  if (item) {
    item.name = req.body.name;
    return res.status(201).json(items);
  } else {
    res.status(404).json({ error: "Item not found" });
  }
});

app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex((item) => item.id == id);
  if (itemIndex !== -1) {
    const deletedItem = items.splice(itemIndex, 1);
    return res.json(deletedItem);
  } else {
    res.status(404).json({ error: "Item not found" });
  }
});

// QUERY PARAMS
app.get("/search", (req, res) => {
  const name = req.query.name;
  const item = items.find((item) => item.name == name);
  if (item) {
    return res.status(201).json(item);
  }
  return res.status(404).json({ error: "Item not found" });
});

app.listen(port, () => {
  console.log(`SERVER RUNNING AT http://localhost:${port}/ `);
});

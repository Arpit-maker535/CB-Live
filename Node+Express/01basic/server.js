// // npm init -y
// // npm install express

// const express = require("express");
// const app = express();
// const port = 3000;

// app.use(express.json()); // Middleware to parse JSON bodies

// // In-memory storage
// let items = [];
// let idCounter = 1;

// app.get("/", (req, res) => {
//   res.send("HELLO WORLD");
// });

// // GET: Retrieve all items
// app.get("/items", (req, res) => {
//   res.json(items);
// });

// // POST: Create a new item
// app.post("/items", (req, res) => {
//   const newItem = {
//     id: idCounter++,
//     name: req.body.name,
//   };
//   items.push(newItem);
//   res.status(201).json(newItem);
// });

// // PUT: Update an item by ID
// app.put("/items/:id", (req, res) => {
//   const id = parseInt(req.params.id, 10);
//   const item = items.find((item) => item.id === id);

//   if (item) {
//     item.name = req.body.name;
//     res.json(item);
//   } else {
//     res.status(404).json({ error: "Item not found" });
//   }
// });

// // DELETE: Remove an item by ID
// app.delete("/items/:id", (req, res) => {
//   const id = parseInt(req.params.id, 10);
//   const itemIndex = items.findIndex((item) => item.id === id);

//   if (itemIndex !== -1) {
//     const deletedItem = items.splice(itemIndex, 1);
//     res.json(deletedItem);
//   } else {
//     res.status(404).json({ error: "Item not found" });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });

// //curl -X GET http://localhost:3000/items

// // curl -X POST http://localhost:3000/items \
// // -H "Content-Type: application/json" \
// // -d '{"name": "Sample Item"}'

// // curl -X PUT http://localhost:3000/items/1 \
// // -H "Content-Type: application/json" \
// // -d '{"name": "Updated Item"}'

// // curl -X DELETE http://localhost:3000/items/1

// npm init -y
// npm install express

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// In-memory storage
let items = [];
let idCounter = 1;

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

// GET: Retrieve all items
// curl -X GET http://localhost:3000/items
app.get("/items", (req, res) => {
  res.json(items);
});

// POST: Create a new item
// curl -X POST http://localhost:3000/items \
// -H "Content-Type: application/json" \
// -d '{"name": "Sample Item"}'
app.post("/items", (req, res) => {
  const newItem = {
    id: idCounter++,
    name: req.body.name,
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT: Update an item by ID
// curl -X PUT http://localhost:3000/items/1 \
// -H "Content-Type: application/json" \
// -d '{"name": "Updated Item"}'
app.put("/items/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const item = items.find((item) => item.id === id);

  if (item) {
    item.name = req.body.name;
    res.json(item);
  } else {
    res.status(404).json({ error: "Item not found" });
  }
});

// DELETE: Remove an item by ID
// curl -X DELETE http://localhost:3000/items/1
app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const itemIndex = items.findIndex((item) => item.id === id);

  if (itemIndex !== -1) {
    const deletedItem = items.splice(itemIndex, 1);
    res.json(deletedItem);
  } else {
    res.status(404).json({ error: "Item not found" });
  }
});

// GET: Retrieve an item by ID (Request Param)
// curl -X GET http://localhost:3000/items/1
app.get("/items/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const item = items.find((item) => item.id === id);

  if (item) {
    res.json(item);
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

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

const express = require("express");
const router = express.Router();

// Mock data
const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

// GET all users
// curl -X GET http://localhost:3000/api/users
router.get("/", (req, res) => {
  res.status(200).json(users);
});

// GET user by ID
// curl -X GET http://localhost:3000/api/users/1
router.get("/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.status(200).json(user);
});

// GET user by name
// curl -X GET http://localhost:3000/api/users/name/John%20Doe
router.get("/name/:name", (req, res) => {
  const user = users.find((u) => u.name === req.params.name);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.status(200).json(user);
});

// POST create a new user
// curl -X POST -H "Content-Type: application/json" -d '{"id":3,"name":"Alice"}' http://localhost:3000/api/users
router.post("/", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;

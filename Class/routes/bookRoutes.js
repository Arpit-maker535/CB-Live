const express = require("express");
const router = express.Router();

// Mock data
const books = [
  { id: 1, title: "1984" },
  { id: 2, title: "Brave New World" },
];

// GET all books
// curl -X GET http://localhost:3000/api/books
router.get("/", (req, res) => {
  res.status(200).json(books);
});

// GET book by ID
// curl -X GET http://localhost:3000/api/books/1
router.get("/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.status(200).json(book);
});

// GET book by title
// curl -X GET http://localhost:3000/api/books/title/1984
router.get("/title/:title", (req, res) => {
  const book = books.find((b) => b.title === req.params.title);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.status(200).json(book);
});

// POST create a new book
// curl -X POST -H "Content-Type: application/json" -d '{"id":3,"title":"Fahrenheit 451"}' http://localhost:3000/api/books
router.post("/", (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

module.exports = router;

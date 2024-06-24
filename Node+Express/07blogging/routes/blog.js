const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const postsFilePath = path.join(__dirname, "../data/posts.json");

const readPostsFromFile = () => {
  try {
    const data = fs.readFileSync(postsFilePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const writePostsToFile = (posts) => {
  fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2));
};

// Get all posts
router.get("/", (req, res) => {
  const posts = readPostsFromFile();
  res.json(posts);
});

// Add a new post
router.post("/", (req, res) => {
  const posts = readPostsFromFile();
  const newPost = req.body;
  const maxId =
    posts.length > 0 ? Math.max(...posts.map((post) => post.id)) : 0;
  newPost.id = maxId + 1;
  posts.push(newPost);
  writePostsToFile(posts);
  res.status(201).json(newPost);
});

// Update a post
router.put("/:id", (req, res) => {
  const posts = readPostsFromFile();
  const id = parseInt(req.params.id, 10);
  const index = posts.findIndex((post) => post.id === id);
  if (index !== -1) {
    posts[index] = req.body;
    posts[index].id = id;
    writePostsToFile(posts);
    res.json(posts[index]);
  } else {
    res.status(404).send("Post not found");
  }
});

// Delete a post
router.delete("/:id", (req, res) => {
  const posts = readPostsFromFile();
  const id = parseInt(req.params.id, 10);
  const index = posts.findIndex((post) => post.id === id);
  if (index !== -1) {
    posts.splice(index, 1);
    writePostsToFile(posts);
    res.status(204).send();
  } else {
    res.status(404).send("Post not found");
  }
});

module.exports = router;

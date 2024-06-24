// npm init -y
// npm install express ejs

const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 3000;

// In-memory storage for tasks
let tasks = [];

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Render the index page with the current tasks
app.get("/", (req, res) => {
  res.render("index", { tasks });
});

// Handle form submission to add a new task
app.post("/add", (req, res) => {
  const task = req.body.task;
  tasks.push(task);

  // Save tasks to output.txt file
  fs.writeFile("output.txt", tasks.join("\n"), (err) => {
    if (err) throw err;
    console.log("Tasks saved to output.txt");
  });

  res.redirect("/");
});

// API to output the tasks
app.get("/output", (req, res) => {
  res.json({ tasks });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

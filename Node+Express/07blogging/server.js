const express = require("express");
const path = require("path");
const app = express();
const blogRouter = require("./routes/blog");
const authMiddleware = require("./middleware/auth");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/blog", authMiddleware, blogRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

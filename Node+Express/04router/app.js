const express = require("express");
const app = express();
const port = 3000;

const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");

app.use(express.json()); // Middleware to parse JSON bodies

app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

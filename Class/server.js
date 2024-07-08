const express = require("express");
const app = express();
const apiRoutes = require("./apis.js");

app.use(express.json());
app.use("/api", apiRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

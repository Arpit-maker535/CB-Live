import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import linkRoutes from "./routes/links.js";

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = "mongodb://localhost:27017/linkshortener";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use("/api/links", linkRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export { app };

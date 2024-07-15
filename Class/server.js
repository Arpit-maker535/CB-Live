const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const Order = require("./models/Order");

const app = express();
app.use(express.json());

const dbUri = "mongodb://localhost:27017/blocks";

mongoose
  .connect(dbUri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/users", async (req, res) => {
  const user = await User.find();
  return res.json(user);
});

app.get("/order/:email", async (req, res) => {
  const email = req.params.email;
  const orders = await Order.find({ customerEmail: email });
  return res.json(orders);
});

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  user.save();
  return res.json(user);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

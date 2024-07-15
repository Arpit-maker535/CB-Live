const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const Order = require("./models/Order");

const app = express();
app.use(express.json());

const dbUri = "mongodb://localhost:27017/blocks";
mongoose
  .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

app.get("/orders", async (req, res) => {
  const orders = await Order.find();
  res.send(orders);
});

app.post("/orders", async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.send(order);
});

app.get("/order/:email", async (req, res) => {
  const userEmail = req.params.email;
  const orders = await Order.find({ customerEmail: userEmail });
  res.send(orders);
});

app.get("/users-with-orders", async (req, res) => {
  const users = await User.aggregate([
    {
      $lookup: {
        from: "orders",
        localField: "email",
        foreignField: "customerEmail",
        as: "orders",
      },
    },
  ]);
  res.send(users);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//curl http://localhost:3000/users

// curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{
//     "name": "Alice",
//     "age": 25,
//     "email": "alice@example.com",
//     "address": {
//       "street": "123 Main St",
//       "city": "New York",
//       "state": "NY",
//       "zip": "10001"
//     }
//   }'

// curl http://localhost:3000/orders

// curl -X POST http://localhost:3000/orders -H "Content-Type: application/json" -d '{
//     "orderId": 1,
//     "customerEmail": "alice@example.com",
//     "amount": 100
//   }'

//curl http://localhost:3000/order/alice@example.com

//curl http://localhost:3000/users-with-orders

const express = require("express");
const router = express.Router();
const {
  createUser,
  createProduct,
  createOrder,
  getUserById,
  getAllUsers,
  getAllProducts,
  getAllOrders,
  getOrderDetails,
} = require("./functions");

router.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await createUser(name, email);
    res.json(user);
  } catch (error) {
    console.error("Error creating user:", error.stack);
    res.status(500).send("Error creating user");
  }
});

router.post("/products", async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const product = await createProduct(name, description, price);
    res.json(product);
  } catch (error) {
    console.error("Error creating product:", error.stack);
    res.status(500).send("Error creating product");
  }
});

router.post("/orders", async (req, res) => {
  try {
    const { user_id, product_id, quantity } = req.body;
    const order = await createOrder(user_id, product_id, quantity);
    res.json(order);
  } catch (error) {
    console.error("Error creating order:", error.stack);
    res.status(500).send("Error creating order");
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error.stack);
    res.status(500).send("Error fetching user");
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error.stack);
    res.status(500).send("Error fetching users");
  }
});

router.get("/products", async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error.stack);
    res.status(500).send("Error fetching products");
  }
});

router.get("/orders", async (req, res) => {
  try {
    const orders = await getAllOrders();
    res.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error.stack);
    res.status(500).send("Error fetching orders");
  }
});

router.get("/orders/:id", async (req, res) => {
  try {
    const orderDetails = await getOrderDetails(req.params.id);
    res.json(orderDetails);
  } catch (error) {
    console.error("Error fetching order details:", error.stack);
    res.status(500).send("Error fetching order details");
  }
});

module.exports = router;

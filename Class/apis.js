const express = require("express");
const { createUser, createProduct, createOrder } = require("./functions");
const router = express.Router();

router.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await createUser(name, email);
    res.json(user);
  } catch (e) {
    console.log("Error in creating user", e);
    res.status(500);
  }
});

router.post("/products", async (req, res) => {
  try {
    const { name, description, price } = req.body;

    const products = await createProduct(name, description, price);
    return res.json(products);
  } catch (e) {
    console.log("Error in creating products", e);
    res.status(500);
  }
});
router.post("/orders", async (req, res) => {
  try {
    const { user_id, product_id, quantity } = req.body;
    const orders = await createOrder(user_id, product_id, quantity);
    res.json(orders);
  } catch (e) {
    console.log("Error in creating orders", e);
    res.status(500);
  }
});

router.get("/users/:id", async (req, res) => {
  try {
  } catch (e) {
    console.log("Error in fetching orders", e);
    res.status(500);
  }
});

router.put("/users/:id", async (req, res) => {
  try {
    const updates = req.body;
    const user = await updateUser(req.params.id, updates);
    res.json(user);
  } catch (error) {
    console.error("Error updating user:", error.stack);
    res.status(500).send("Error updating user");
  }
});

module.exports = router;

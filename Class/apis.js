const express = require("express");
const { createUser } = require("./functions");
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

module.exports = router;

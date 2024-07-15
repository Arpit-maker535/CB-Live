const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

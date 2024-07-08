const User = require("./models/User");
const Order = require("./models/Order");
const Product = require("./models/Product");

const createUser = async (name, email) => {
  return await User.create({ name, email });
};

module.exports = {
  createUser,
};

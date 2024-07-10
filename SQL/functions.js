const User = require("./models/User.js");
const Product = require("./models/Product.js");
const Order = require("./models/Order.js");

const createUser = async (name, email) => {
  return await User.create({ name, email });
};

const createProduct = async (name, description, price) => {
  return await Product.create({ name, description, price });
};

const createOrder = async (user_id, product_id, quantity) => {
  return await Order.create({ user_id, product_id, quantity });
};

const getUserById = async (id) => {
  return await User.findByPk(id);
};

const getAllUsers = async () => {
  return await User.findAll();
};

const getAllProducts = async () => {
  return await Product.findAll();
};

const getAllOrders = async () => {
  return await Order.findAll({
    include: [
      { model: User, attributes: ["name", "email"] },
      { model: Product, attributes: ["name", "price"] },
    ],
  });
};

const getOrderDetails = async (order_id) => {
  return await Order.findOne({
    where: { id: order_id },
    include: [
      { model: User, attributes: ["name", "email"] },
      { model: Product, attributes: ["name", "price"] },
    ],
  });
};

const updateUser = async (id, updates) => {
  const user = await User.findByPk(id);
  if (user) {
    return await user.update(updates);
  }
  throw new Error("User not found");
};

const updateProduct = async (id, updates) => {
  const product = await Product.findByPk(id);
  if (product) {
    return await product.update(updates);
  }
  throw new Error("Product not found");
};

module.exports = {
  createUser,
  createProduct,
  createOrder,
  getUserById,
  getAllUsers,
  getAllProducts,
  getAllOrders,
  getOrderDetails,
  updateUser,
  updateProduct,
};

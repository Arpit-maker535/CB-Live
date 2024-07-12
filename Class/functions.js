const User = require("./models/User");
const Order = require("./models/Order");
const Product = require("./models/Product");

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
  return await User.findAll(id);
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
      {
        model: Product,
        attributes: ["name", "price"],
      },
    ],
  });
};

const getOrderDetails = async () => {
  return await Order.findOne({
    where: { id: order_id },
  });
};

const editAProduct = async (id, name, description, price) => {
  const product = await Product.findOne({
    where: {
      id: id,
    },
  });

  if (product) {
    product.name = name;
    product.description = description;
    product.price = price;
    product.save();
  }
  return product;
};

const updateUser = async (id, updates) => {
  const product = await Product.findByPk(id);
  if (product) {
    return await product.update();
  }
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
};

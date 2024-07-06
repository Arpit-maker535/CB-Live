const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const User = require("./User");
const Product = require("./Product");

const Order = sequelize.define(
  "Order",
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    order_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
  }
);

Order.belongsTo(User, { foreignKey: "user_id" });
Order.belongsTo(Product, { foreignKey: "product_id" });

module.exports = Order;

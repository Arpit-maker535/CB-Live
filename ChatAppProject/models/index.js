const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("blocks", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const User = require("./user")(sequelize, DataTypes);
const Message = require("./message")(sequelize, DataTypes);

User.hasMany(Message);
Message.belongsTo(User);

sequelize.sync();

module.exports = { sequelize, User, Message };

// CREATE TABLE `Users` (
//     `id` INT AUTO_INCREMENT PRIMARY KEY,
//     `username` VARCHAR(255) NOT NULL UNIQUE,
//     `password` VARCHAR(255) NOT NULL,
//     `createdAt` DATETIME NOT NULL,
//     `updatedAt` DATETIME NOT NULL
//   );

//   CREATE TABLE `Messages` (
//     `id` INT AUTO_INCREMENT PRIMARY KEY,
//     `text` VARCHAR(255) NOT NULL,
//     `createdAt` DATETIME NOT NULL,
//     `updatedAt` DATETIME NOT NULL,
//     `UserId` INT,
//     FOREIGN KEY (`UserId`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE
//   );

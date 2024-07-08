const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("blocks", "root", "root", {
  // dbName, username,password
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("CONNECTED TO database");
  })
  .catch(() => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;

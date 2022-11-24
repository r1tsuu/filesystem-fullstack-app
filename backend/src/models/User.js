const { DataTypes } = require("sequelize");
const database = require("./database");

module.exports = database.define("Member", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isSuperUser: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

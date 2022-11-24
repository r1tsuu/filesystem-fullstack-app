const { Sequelize } = require("sequelize");

const dbms = process.env.DBMS;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const db = process.env.DB_NAME;
const url = process.env.DB_URL;

module.exports = new Sequelize(`${dbms}://${user}:${password}@${url}/${db}`);

const { Sequelize } = require("sequelize");
const config = require("./config"); // Ajusta ruta según estructura
require("dotenv").config();

const env = process.env.NODE_ENV || "development";
const envConfig = config[env];

// Crear instancia Sequelize usando config de CLI
const sequelize = new Sequelize(
  envConfig.database,
  envConfig.username,
  envConfig.password,
  {
    host: envConfig.host,
    dialect: envConfig.dialect,
    logging: false,
  }
);

module.exports = sequelize;

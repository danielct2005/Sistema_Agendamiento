const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Medico = sequelize.define(
  "Medico",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    especialidad: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "Medico",
    timestamps: false,
  }
);

module.exports = Medico;

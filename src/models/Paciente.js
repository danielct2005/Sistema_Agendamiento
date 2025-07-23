const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Paciente = sequelize.define(
  "Paciente",
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rut: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sexo: {
      type: DataTypes.ENUM("M", "F", "O"),
      allowNull: false,
      defaultValue: "O",
    },
  },
  {
    tableName: "Pacientes",
    timestamps: false,
  }
);

module.exports = Paciente;

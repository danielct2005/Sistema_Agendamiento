const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Paciente = require("./Paciente");
const Medico = require("./Medico");

const Cita = sequelize.define(
  "Cita",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fechaHora: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    motivo: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    pacienteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Pacientes",
        key: "id",
      },
    },
    medicoId: {
      type: DataTypes.INTEGER,
      allowNull: true, // o false si quieres obligatorio
      references: {
        model: "Medico",
        key: "id",
      },
    },
  },
  {
    tableName: "Cita",
    timestamps: false,
  }
);

// Definir relaciones entre tablas
Paciente.hasMany(Cita, { foreignKey: "pacienteId" });
Cita.belongsTo(Paciente, { foreignKey: "pacienteId" });

// Relaciones
Medico.hasMany(Cita, { foreignKey: "medicoId" });
Cita.belongsTo(Medico, { foreignKey: "medicoId" });

module.exports = Cita;

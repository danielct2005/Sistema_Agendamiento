const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Paciente = require("./Paciente");

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
	},
	{
		tableName: "Cita",
		timestamps: false,
	}
);

// Definir relaciones entre tablas
Paciente.hasMany(Cita, { foreignKey: "pacienteId" });
Cita.belongsTo(Paciente, { foreignKey: "pacienteId" });

module.exports = Cita;

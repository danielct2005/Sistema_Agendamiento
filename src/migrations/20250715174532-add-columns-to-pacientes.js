"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Usar transacción para prevenir errores de columnas con NULL
    await queryInterface.sequelize.transaction(async (transaction) => {
      // Paso 1: Setear un valor temporal para filas donde 'rut' es NULL
      await queryInterface.sequelize.query(
        `UPDATE "Pacientes" SET "rut" = 'RUTTEMPORAL' WHERE "rut" IS NULL;`,
        { transaction }
      );

      // Paso 2: Agregar columna rut con restricciones
      await queryInterface.addColumn(
        "Pacientes",
        "rut",
        {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        { transaction }
      );

      // Paso 3: Agregar otras columnas normalmente
      await queryInterface.addColumn(
        "Pacientes",
        "direccion",
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
        { transaction }
      );

      await queryInterface.addColumn(
        "Pacientes",
        "sexo",
        {
          type: Sequelize.ENUM("M", "F", "O"),
          allowNull: false,
          defaultValue: "O",
        },
        { transaction }
      );
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Pacientes", "sexo");
    await queryInterface.removeColumn("Pacientes", "direccion");
    await queryInterface.removeColumn("Pacientes", "rut");
  },
};

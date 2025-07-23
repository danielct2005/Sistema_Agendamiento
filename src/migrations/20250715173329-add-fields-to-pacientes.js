module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Pacientes", "rut", {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("Pacientes", "direccion", {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("Pacientes", "sexo", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Pacientes", "rut");
    await queryInterface.removeColumn("Pacientes", "direccion");
    await queryInterface.removeColumn("Pacientes", "sexo");
  },
};

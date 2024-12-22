'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('clientes', [
      {
        nombre: 'Cliente 1',
        direccion: 'Greyna',
        telefono: '12345678',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Cliente 2',
        direccion: 'Daniela',
        telefono: '87654321',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        nombre: 'Cliente 3',
        direccion: 'Dickson',
        telefono: '12348765',
        createdAt: new Date(),
        updatedAt: new Date()
      }

      ], {});
    },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clientes', null, {});

    /**matematico-neaup: async (queryInterface, Sequelize) => { await queryInterface.bulkInsert('Clientes', [GitHub CopilotSorry
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

'use strict';

// 'random-cost',
// 'randoms-cuisine',
// 'is-halal',
// 'randoms-meal-of-the-day',
// 'random-meat-fish'

const dataVendor = [
  {
    name: 'random-cost',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'randoms-cuisine',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'is-halal',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'randoms-meal-of-the-day',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'random-meat-fish',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Vendors',dataVendor,{})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Vendors',null,{})
  }
};

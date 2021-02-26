'use strict';

const dishData = [
  {
    name: 'roti',
    price: 15000,
    VendorId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'kopi',
    price: 15000,
    VendorId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'teh',
    price: 7000,
    VendorId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'roti',
    price: 35000,
    VendorId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'kopi',
    price: 95000,
    VendorId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'teh',
    price: 15000,
    VendorId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'sate',
    price: 25000,
    VendorId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'nasi goreng',
    price: 75000,
    VendorId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'teh',
    price: 35000,
    VendorId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'steak',
    price: 1500000,
    VendorId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'susu',
    price: 500000,
    VendorId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'ikan goreng',
    price: 45000,
    VendorId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'ikan rebus',
    price: 45000,
    VendorId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
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
   await queryInterface.bulkInsert('Dishes',dishData,{})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Dishes', null, {});
  }
};

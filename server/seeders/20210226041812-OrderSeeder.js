'use strict';

const orderData = [
  {
    DishId: 1,
    VendorId: 1,
    amount: 1,
    request: '',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    DishId: 4,
    VendorId: 2,
    amount: 1,
    request: '',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    DishId: 7,
    VendorId: 3,
    amount: 1,
    request: '',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    DishId: 10,
    VendorId: 4,
    amount: 1,
    request: '',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    DishId: 12,
    VendorId: 5,
    amount: 1,
    request: '',
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
   await queryInterface.bulkInsert('Orders',orderData,{})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Orders', null, {});
  }
};

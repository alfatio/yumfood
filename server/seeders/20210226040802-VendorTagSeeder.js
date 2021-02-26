'use strict';

const vendorTagData = [
  {
    VendorId: 1,
    TagId : 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    VendorId: 1,
    TagId : 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    VendorId: 1,
    TagId : 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    VendorId: 2,
    TagId : 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    VendorId: 3,
    TagId : 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    VendorId: 3,
    TagId : 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    VendorId: 4,
    TagId : 11,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    VendorId: 4,
    TagId : 14,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    VendorId: 5,
    TagId : 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    VendorId: 5,
    TagId : 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    VendorId: 5,
    TagId : 10,
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
   await queryInterface.bulkInsert('VendorTags',vendorTagData,{})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('VendorTags', null, {});
  }
};

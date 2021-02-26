'use strict';

// \App\Interfaces\TagInterface::CHINESE,
// \App\Interfaces\TagInterface::WESTERN,
// \App\Interfaces\TagInterface::KOREAN,
// \App\Interfaces\TagInterface::INDONESIAN,
// \App\Interfaces\TagInterface::BEVERAGES,
// \App\Interfaces\TagInterface::HALAL,
// \App\Interfaces\TagInterface::LUNCH,
// \App\Interfaces\TagInterface::DINNER,
// \App\Interfaces\TagInterface::BREAKFAST,
// \App\Interfaces\TagInterface::FISH,
// \App\Interfaces\TagInterface::MEAT,
// \App\Interfaces\TagInterface::BUDGET,
// \App\Interfaces\TagInterface::AFFORDABLE,
// \App\Interfaces\TagInterface::EXPENSIVE,

const dataTag = [
  {
    name: 'CHINESE',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'WESTERN',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'KOREAN',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'INDONESIAN',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'BEVERAGES',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'HALAL',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'LUNCH',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'DINNER',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'BREAKFAST',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'FISH',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'MEAT',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'BUDGET',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'AFFORDABLE',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'EXPENSIVE',
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
   await queryInterface.bulkInsert('Tags',dataTag,{})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Tags',null,{})
  }
};

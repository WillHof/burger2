'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('burgers', [{
      burger_name: 'Hamburger',
      devoured: false,
      createdAt: '2019-07-04T01:01:24',
      updatedAt: '2019-07-04T01:01:24'
    },
    {
      burger_name: 'Cheeseburger',
      devoured: false,
      createdAt: '2019-07-04T01:01:24',
      updatedAt: '2019-07-04T01:01:24'
    },
    {
      burger_name: 'Wake-up Burger',
      devoured: false,
      createdAt: '2019-07-04T01:01:24',
      updatedAt: '2019-07-04T01:01:24'
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('burgers', null, {});
  }
};

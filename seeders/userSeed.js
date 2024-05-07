'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Users', [{
            email: 'admin@admin.com',
            password: '$2b$10$3CqdHT7pP26YhZ7m3Z/V6.CaCZT5i.ZCtKPxMm4ByTOHNvFPOVCNa', 
            name: 'Admin User',
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Users', null, {});
    }
};

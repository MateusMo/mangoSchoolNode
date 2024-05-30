'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Volunteers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      parentFirstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      parentLastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      birthDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      educationLevel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      schoolName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      emergency: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      emergencyNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      emergencyRelated: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      question1: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      question2: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      question3: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      checkbox: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Volunteers');
  }
};

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Grades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      studentName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      className: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      arith: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      kus: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      he: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sa: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      writ: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      read: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      total: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ave: {
        type: Sequelize.INTEGER,
        allowNull: false
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Grades');
  }
};

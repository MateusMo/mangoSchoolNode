'use strict';

module.exports = (sequelize, DataTypes) => {
    const Volunteer = sequelize.define('Volunteer', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        parentFirstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        parentLastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        educationLevel: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        schoolName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        emergency: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        emergencyNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        emergencyRelated: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        question1: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        question2: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        question3: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        checkbox: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    });

    return Volunteer;
};

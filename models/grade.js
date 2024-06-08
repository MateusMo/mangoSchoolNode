'use strict';

module.exports = (sequelize, DataTypes) => {

    const Grade = sequelize.define('Grade', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        studentName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        className: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            allowNull: false,
            type: DataTypes.DATE
        },
        arith: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        kus: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        he: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sa: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        writ: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        read: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ave: {
            type: DataTypes.INTEGER,
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


    return Grade;
};

'use strict';

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false, 
            defaultValue: 0, 
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false, 
            defaultValue: 0, 
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


    return User;
};

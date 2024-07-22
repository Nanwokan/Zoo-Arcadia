const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Animal = sequelize.define('Animal', {
    animal_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    prenom: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    etat: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    tableName: 'animal',
    timestamps: false
});

module.exports = Animal;

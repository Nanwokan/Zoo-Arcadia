const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Animal = sequelize.define('Animal', {
    animal_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    habitat_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Habitats',
            key: 'habitat_id'
        }
    },
    race_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Races',
            key: 'race_id'
        }
    },
    etat: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    tableName: 'animal',
    timestamps: false,
});

module.exports = Animal;

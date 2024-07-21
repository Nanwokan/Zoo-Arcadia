const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Animal = require('./Animal');
const Habitat = require('./Habitat');

const Detient = sequelize.define('Detient', {
    animal_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Animal,
            key: 'animal_id'
        },
        primaryKey: true
    },
    habitat_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Habitat,
            key: 'habitat_id'
        },
        primaryKey: true
    }
}, {
    tableName: 'detient',
    timestamps: false
});

module.exports = Detient;

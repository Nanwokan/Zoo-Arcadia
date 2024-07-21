const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Animal = require('./Animal');
const Race = require('./Race');

const Dispose = sequelize.define('Dispose', {
    animal_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Animal,
            key: 'animal_id'
        },
        primaryKey: true
    },
    race_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Race,
            key: 'race_id'
        },
        primaryKey: true
    }
}, {
    tableName: 'dispose',
    timestamps: false
});

module.exports = Dispose;

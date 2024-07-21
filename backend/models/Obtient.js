const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Animal = require('./Animal');
const RapportVeterinaire = require('./RapportVeterinaire');

const Obtient = sequelize.define('Obtient', {
    animal_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Animal,
            key: 'animal_id'
        },
        primaryKey: true
    },
    rapport_veterinaire_id: {
        type: DataTypes.INTEGER,
        references: {
            model: RapportVeterinaire,
            key: 'rapport_veterinaire_id'
        },
        primaryKey: true
    }
}, {
    tableName: 'obtient',
    timestamps: false
});

module.exports = Obtient;

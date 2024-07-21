const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const RapportVeterinaire = sequelize.define('RapportVeterinaire', {
    rapport_veterinaire_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    detail: {
        type: DataTypes.STRING(50),
        allowNull: true
    }
}, {
    tableName: 'rapport_veterinaire',
    timestamps: false
});

module.exports = RapportVeterinaire;

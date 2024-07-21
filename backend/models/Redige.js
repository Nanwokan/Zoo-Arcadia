const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Utilisateur = require('./Utilisateur');
const RapportVeterinaire = require('./RapportVeterinaire');

const Redige = sequelize.define('Redige', {
    email: {
        type: DataTypes.STRING(50),
        references: {
            model: Utilisateur,
            key: 'email'
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
    tableName: 'redige',
    timestamps: false
});

module.exports = Redige;

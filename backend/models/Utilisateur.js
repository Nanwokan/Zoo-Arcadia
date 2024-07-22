const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Utilisateur = sequelize.define('Utilisateur', {
    email: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nom: {
        type: DataTypes.STRING,
    },
    prenom: {
        type: DataTypes.STRING,
    },
}, {
    tableName: 'utilisateur',
    timestamps: false,
});

module.exports = Utilisateur;

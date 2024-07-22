const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Habitat = sequelize.define('Habitat', {
    habitat_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nom: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    tableName: 'habitat',
    timestamps: false
});

module.exports = Habitat;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Service = sequelize.define('Service', {
    service_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nom: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    description: {
        type: DataTypes.STRING(500),
        allowNull: true
    }
}, {
    tableName: 'service',
    timestamps: false
});

module.exports = Service;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Race = sequelize.define('Race', {
    race_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    label: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'race',
    timestamps: false,
});

module.exports = Race;

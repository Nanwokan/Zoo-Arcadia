const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Race = sequelize.define('Race', {
    race_id: {
        type: DataTypes.INTEGER,
<<<<<<< HEAD
        primaryKey: true,
        autoIncrement: true,
=======
        autoIncrement: true,
        primaryKey: true,
>>>>>>> master
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

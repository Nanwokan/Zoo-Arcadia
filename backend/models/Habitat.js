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
<<<<<<< HEAD
        allowNull: true
    },
    description: {
        type: DataTypes.STRING(500),
        allowNull: true
=======
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: false
>>>>>>> master
    }
}, {
    tableName: 'habitat',
    timestamps: false
});

module.exports = Habitat;

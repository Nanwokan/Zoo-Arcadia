const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Avis = sequelize.define('Avis', {
    avis_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    pseudo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    commentaire: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    },
    isVisible: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'avis',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: false
});

module.exports = Avis;

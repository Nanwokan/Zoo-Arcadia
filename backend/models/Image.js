const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Animal = require('./Animal');
const Habitat = require('./Habitat');

const Image = sequelize.define('Image', {
    image_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    image_data: {
        type: DataTypes.BLOB,
        allowNull: false,
    },
    animal_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Animal,
            key: 'animal_id'
        },
        onDelete: 'CASCADE',
        allowNull: true,
    },
    habitat_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Habitat,
            key: 'habitat_id'
        },
        onDelete: 'CASCADE',
        allowNull: true,
    }
}, {
    tableName: 'image',
    timestamps: false,
});

module.exports = Image;

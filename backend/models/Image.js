const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Image = sequelize.define('Image', {
    image_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    image_data: {
        type: DataTypes.BLOB,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: true
    },
    animal_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Animal',
            key: 'animal_id'
        }
    },
    habitat_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Habitat',
            key: 'habitat_id'
        }
    }
}, {
    tableName: 'image',
    timestamps: false
});

module.exports = Image;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Habitat = require('./Habitat');
const Image = require('./Image');

const Comporte = sequelize.define('Comporte', {
    habitat_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Habitat,
            key: 'habitat_id'
        },
        primaryKey: true
    },
    image_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Image,
            key: 'image_id'
        },
        primaryKey: true
    }
}, {
    tableName: 'comporte',
    timestamps: false
});

module.exports = Comporte;

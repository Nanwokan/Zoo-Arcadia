const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Comporte = sequelize.define('Comporte', {
    habitat_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Habitat', // Nom de la table des habitats
            key: 'id'
        }
    },
    image_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Image', // Nom de la table des images
            key: 'id'
        }
    }
}, {
    timestamps: false
});

module.exports = Comporte;

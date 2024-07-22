const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
<<<<<<< HEAD
const Habitat = require('./Habitat');
const Image = require('./Image');
=======
>>>>>>> master

const Comporte = sequelize.define('Comporte', {
    habitat_id: {
        type: DataTypes.INTEGER,
        references: {
<<<<<<< HEAD
            model: Habitat,
            key: 'habitat_id'
        },
        primaryKey: true
=======
            model: 'Habitat', // Nom de la table des habitats
            key: 'id'
        }
>>>>>>> master
    },
    image_id: {
        type: DataTypes.INTEGER,
        references: {
<<<<<<< HEAD
            model: Image,
            key: 'image_id'
        },
        primaryKey: true
    }
}, {
    tableName: 'comporte',
=======
            model: 'Image', // Nom de la table des images
            key: 'id'
        }
    }
}, {
>>>>>>> master
    timestamps: false
});

module.exports = Comporte;

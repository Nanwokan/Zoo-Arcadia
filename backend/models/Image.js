const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
<<<<<<< HEAD
const Animal = require('./Animal');
const Habitat = require('./Habitat');
=======
>>>>>>> master

const Image = sequelize.define('Image', {
    image_id: {
        type: DataTypes.INTEGER,
<<<<<<< HEAD
        primaryKey: true,
        autoIncrement: true,
    },
    image_data: {
        type: DataTypes.BLOB,
        allowNull: false,
=======
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
>>>>>>> master
    },
    animal_id: {
        type: DataTypes.INTEGER,
        references: {
<<<<<<< HEAD
            model: Animal,
            key: 'animal_id'
        },
        onDelete: 'CASCADE',
        allowNull: true,
=======
            model: 'Animal',
            key: 'animal_id'
        }
>>>>>>> master
    },
    habitat_id: {
        type: DataTypes.INTEGER,
        references: {
<<<<<<< HEAD
            model: Habitat,
            key: 'habitat_id'
        },
        onDelete: 'CASCADE',
        allowNull: true,
    }
}, {
    tableName: 'image',
    timestamps: false,
=======
            model: 'Habitat',
            key: 'habitat_id'
        }
    }
}, {
    tableName: 'image',
    timestamps: false
>>>>>>> master
});

module.exports = Image;

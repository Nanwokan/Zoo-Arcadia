const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const CommentaireHabitat = sequelize.define('CommentaireHabitat', {
    commentaire_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    habitat_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    commentaire: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'commentaire_habitat',
    timestamps: false
});

module.exports = CommentaireHabitat;

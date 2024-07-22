const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Possede = sequelize.define('Possede', {
  email: {
    type: DataTypes.STRING,
    primaryKey: true,
    references: {
      model: 'utilisateur',
      key: 'email'
    }
  },
  role_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'role',
      key: 'role_id'
    }
  }
}, {
  tableName: 'possede',
  timestamps: false
});

module.exports = Possede;

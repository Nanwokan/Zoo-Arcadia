const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Charger les variables d'environnement à partir du fichier .env
dotenv.config();

// Créer une instance de Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

// Exporter l'instance de Sequelize
module.exports = sequelize;

const { Race } = require('../models');

// Récupérer toutes les races
exports.getAllRaces = async (req, res) => {
  try {
    const races = await Race.findAll();
    res.json(races);
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des races.' });
  }
};

// Créer une nouvelle race
exports.createRace = async (req, res) => {
  try {
    const race = await Race.create(req.body);
    res.status(201).json(race);
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue lors de la création de la race.' });
  }
};

const express = require('express');
const router = express.Router();
const raceController = require('../controllers/raceController');

// Route pour obtenir toutes les races
router.get('/', raceController.getAllRaces);

// Route pour créer une nouvelle race
router.post('/', raceController.createRace);

module.exports = router;

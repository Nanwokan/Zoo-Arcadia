const express = require('express');
const router = express.Router();
const raceController = require('../controllers/raceController');

<<<<<<< HEAD
// Route pour obtenir toutes les races
router.get('/', raceController.getAllRaces);

// Route pour créer une nouvelle race
router.post('/', raceController.createRace);
=======
router.post('/', raceController.createRace);
router.get('/', raceController.getRaces);
>>>>>>> master

module.exports = router;

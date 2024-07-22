const express = require('express');
const router = express.Router();
const raceController = require('../controllers/raceController');

router.post('/', raceController.createRace);
router.get('/', raceController.getRaces);

module.exports = router;

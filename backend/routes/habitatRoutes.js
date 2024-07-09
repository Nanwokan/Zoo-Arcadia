const express = require('express');
const router = express.Router();
const habitatController = require('../controllers/habitatController');

router.get('/', habitatController.getAllHabitats);
router.post('/', habitatController.addHabitat);

// Other routes...

module.exports = router;

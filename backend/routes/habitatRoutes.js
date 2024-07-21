const express = require('express');
const router = express.Router();
const habitatController = require('../controllers/habitatController');
const upload = require('../middleware/upload'); // Assurez-vous que ce chemin est correct

router.post('/', upload.single('image'), habitatController.createHabitat);
router.get('/', habitatController.getAllHabitats);
router.put('/:id', upload.array('habitat_images', 10), habitatController.updateHabitat);
router.delete('/:id', habitatController.deleteHabitat);

module.exports = router;



const express = require('express');
const router = express.Router();
const habitatController = require('../controllers/habitatController');
const multer = require('multer');
const upload = multer();

router.post('/', upload.array('habitat_images', 10), habitatController.createHabitat);
router.get('/', habitatController.getHabitats);
router.put('/:id', upload.array('habitat_images', 10), habitatController.updateHabitat);
router.delete('/:id', habitatController.deleteHabitat);

module.exports = router;

const express = require('express');
const router = express.Router();
const habitatController = require('../controllers/habitatController');
<<<<<<< HEAD
const upload = require('../middleware/upload'); // Assurez-vous que ce chemin est correct

router.post('/', upload.single('image'), habitatController.createHabitat);
router.get('/', habitatController.getAllHabitats);
=======
const multer = require('multer');
const upload = multer();

router.post('/', upload.array('habitat_images', 10), habitatController.createHabitat);
router.get('/', habitatController.getHabitats);
>>>>>>> master
router.put('/:id', upload.array('habitat_images', 10), habitatController.updateHabitat);
router.delete('/:id', habitatController.deleteHabitat);

module.exports = router;



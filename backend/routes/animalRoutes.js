const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');
const multer = require('multer');
const upload = multer();

router.post('/', upload.array('animal_photos', 10), animalController.createAnimal);
router.get('/', animalController.getAnimals);

module.exports = router;

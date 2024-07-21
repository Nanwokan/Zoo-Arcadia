const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');
const upload = require('../middleware/upload'); // Corrigez le chemin ici

router.post('/', upload.array('animal_photos', 5), animalController.createAnimal);
router.get('/', animalController.getAllAnimals);
router.delete('/:id', animalController.deleteAnimal);
// Mettre à jour un animal
router.put('/:id', animalController.updateAnimal);


module.exports = router;




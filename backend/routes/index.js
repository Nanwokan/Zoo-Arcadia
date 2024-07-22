const express = require('express');
const userRoutes = require('./userRoutes');
const serviceRoutes = require('./serviceRoutes');
const animalRoutes = require('./animalRoutes');
const raceRoutes = require('./raceRoutes');
const habitatRoutes = require('./habitatRoutes');
const commentaireHabitatRoutes = require('./commentaireHabitatRoutes');
const rapportVeterinaireRoutes = require('./rapportVeterinaireRoutes');
const avisRoutes = require('./avisRoutes');
const imageRoutes = require('./imageRoutes');
const roleRoutes = require('./roleRoutes'); // Assurez-vous d'avoir ajouté cette ligne

const router = express.Router();

router.use('/users', userRoutes);
router.use('/services', serviceRoutes);
router.use('/animals', animalRoutes);
router.use('/races', raceRoutes);
router.use('/habitats', habitatRoutes);
router.use('/commentaire_habitat', commentaireHabitatRoutes);
router.use('/rapport_veterinaires', rapportVeterinaireRoutes);
router.use('/avis', avisRoutes);
router.use('/images', imageRoutes);
router.use('/roles', roleRoutes); // Assurez-vous d'avoir ajouté cette ligne

module.exports = router;

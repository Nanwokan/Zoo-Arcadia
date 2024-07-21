const express = require('express');
const router = express.Router();
const rapportVeterinaireController = require('../controllers/rapportVeterinaireController');

router.post('/', rapportVeterinaireController.createRapport);
router.get('/', rapportVeterinaireController.getRapports);
router.put('/:id', rapportVeterinaireController.updateRapport);
router.delete('/:id', rapportVeterinaireController.deleteRapport);

module.exports = router;

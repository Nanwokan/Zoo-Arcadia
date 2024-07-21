const express = require('express');
const router = express.Router();
const avisController = require('../controllers/avisController');

router.post('/', avisController.createAvis);
router.get('/', avisController.getAllAvis);
router.put('/:id/validate', avisController.validateAvis);
router.delete('/:id', avisController.deleteAvis);

module.exports = router;

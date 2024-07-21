const express = require('express');
const router = express.Router();
const commentaireHabitatController = require('../controllers/commentaireHabitatController');

router.post('/', commentaireHabitatController.createComment);
router.get('/', commentaireHabitatController.getComments);

module.exports = router;

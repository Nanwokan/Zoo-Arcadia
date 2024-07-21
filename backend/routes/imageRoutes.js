const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

router.post('/', imageController.uploadImage);
router.get('/', imageController.getImages);
router.delete('/:id', imageController.deleteImage);

module.exports = router;

const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');
const multer = require('multer');
const upload = multer();

router.post('/', upload.single('image'), imageController.uploadImage);
router.get('/', imageController.getImages);
router.delete('/:id', imageController.deleteImage);

module.exports = router;

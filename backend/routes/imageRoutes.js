const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');
<<<<<<< HEAD

router.post('/', imageController.uploadImage);
=======
const multer = require('multer');
const upload = multer();

router.post('/', upload.single('image'), imageController.uploadImage);
>>>>>>> master
router.get('/', imageController.getImages);
router.delete('/:id', imageController.deleteImage);

module.exports = router;

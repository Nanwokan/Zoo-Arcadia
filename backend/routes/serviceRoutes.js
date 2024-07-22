const express = require('express');
const serviceController = require('../controllers/serviceController');

const router = express.Router();

router.get('/', serviceController.getAllServices);
router.post('/', serviceController.createService);
router.put('/:service_id', serviceController.updateService);
router.delete('/:service_id', serviceController.deleteService);

module.exports = router;

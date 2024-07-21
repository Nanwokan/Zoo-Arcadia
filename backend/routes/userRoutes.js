const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/:email', userController.getUserDetails);
router.get('/', userController.getAllUsers);
router.put('/:email', userController.updateUser);

module.exports = router;

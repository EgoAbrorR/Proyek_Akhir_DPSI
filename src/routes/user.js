const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');

router.get('/', auth, checkRole(['Admin', 'Pemilik']), userController.getAllUsers);
router.get('/:id', auth, checkRole(['Admin', 'Pemilik']), userController.getUserById);
router.post('/', auth, checkRole(['Admin']), userController.createUser);
router.put('/:id', auth, checkRole(['Admin']), userController.updateUser);
router.delete('/:id', auth, checkRole(['Admin']), userController.deleteUser);

module.exports = router;

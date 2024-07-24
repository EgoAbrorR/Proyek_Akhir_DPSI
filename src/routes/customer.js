const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');

router.get('/', auth, checkRole(['Admin', 'Pegawai', 'Pemilik']), customerController.getAllCustomers);
router.get('/:id', auth, checkRole(['Admin', 'Pegawai', 'Pemilik']), customerController.getCustomerById);
router.post('/', auth, checkRole(['Admin', 'Pegawai']), customerController.createCustomer);
router.put('/:id', auth, checkRole(['Admin', 'Pegawai']), customerController.updateCustomer);
router.delete('/:id', auth, checkRole(['Admin']), customerController.deleteCustomer);

module.exports = router;

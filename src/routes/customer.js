const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');
// Route untuk mengambil semua data pelanggan
// Hanya dapat diakses oleh Admin, Pegawai, atau Pemilik
router.get('/', auth, checkRole(['Admin', 'Pegawai', 'Pemilik']), customerController.getAllCustomers);

// Route untuk mengambil data pelanggan berdasarkan ID
// Hanya dapat diakses oleh Admin, Pegawai, atau Pemilik
router.get('/:id', auth, checkRole(['Admin', 'Pegawai', 'Pemilik']), customerController.getCustomerById);

// Route untuk menambah data pelanggan baru
// Hanya dapat diakses oleh Admin atau Pegawai
router.post('/', auth, checkRole(['Admin', 'Pegawai']), customerController.createCustomer);

// Route untuk memperbarui data pelanggan berdasarkan ID
// Hanya dapat diakses oleh Admin atau Pegawai
router.put('/:id', auth, checkRole(['Admin', 'Pegawai']), customerController.updateCustomer);

// Route untuk menghapus data pelanggan berdasarkan ID
// Hanya dapat diakses oleh Admin
router.delete('/:id', auth, checkRole(['Admin']), customerController.deleteCustomer);

module.exports = router;

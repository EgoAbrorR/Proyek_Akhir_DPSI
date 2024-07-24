const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');

router.get('/', auth, checkRole(['Admin', 'Pemilik', 'Pegawai']), productController.getAllProducts);
router.get('/:id', auth, checkRole(['Admin', 'Pemilik', 'Pegawai']), productController.getProductById);
router.post('/', auth, checkRole(['Admin', 'Pemilik']), productController.createProduct);
router.put('/:id', auth, checkRole(['Admin', 'Pemilik']), productController.updateProduct);
router.delete('/:id', auth, checkRole(['Admin', 'Pemilik']), productController.deleteProduct);

module.exports = router;

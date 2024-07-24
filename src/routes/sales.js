const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');
const auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');

router.get('/', auth, checkRole(['Admin', 'Pemilik']), salesController.getAllSales);
router.get('/:id', auth, checkRole(['Admin', 'Pemilik']), salesController.getSaleById);
router.post('/', auth, checkRole(['Admin']), salesController.createSale);
router.put('/:id', auth, checkRole(['Admin']), salesController.updateSale);
router.delete('/:id', auth, checkRole(['Admin']), salesController.deleteSale);

module.exports = router;

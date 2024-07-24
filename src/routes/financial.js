const express = require('express');
const router = express.Router();
const financialController = require('../controllers/financialController');
const auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');

router.get('/', auth, checkRole(['Admin', 'Pemilik']), financialController.getAllReports);
router.get('/:id', auth, checkRole(['Admin', 'Pemilik']), financialController.getReportById);
router.post('/', auth, checkRole(['Admin']), financialController.createReport);
router.put('/:id', auth, checkRole(['Admin']), financialController.updateReport);
router.delete('/:id', auth, checkRole(['Admin']), financialController.deleteReport);

module.exports = router;

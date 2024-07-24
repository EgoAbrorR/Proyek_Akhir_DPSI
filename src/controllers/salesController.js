const Sale = require('../models/sales');

const getAllSales = (req, res) => {
  Sale.getAll((err, sales) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(sales);
  });
};

const getSaleById = (req, res) => {
  const saleId = req.params.id;
  Sale.getById(saleId, (err, sale) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!sale.length) {
      return res.status(404).send('Sale not found');
    }
    res.send(sale[0]);
  });
};

const createSale = (req, res) => {
  const { id_product, id_customer, quantity, total_price, sale_date } = req.body;
  const sale = { id_product, id_customer, quantity, total_price, sale_date };
  Sale.create(sale, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).send('Sale created');
  });
};

const updateSale = (req, res) => {
  const saleId = req.params.id;
  const { id_product, id_customer, quantity, total_price, sale_date } = req.body;
  const sale = { id_product, id_customer, quantity, total_price, sale_date };
  Sale.update(saleId, sale, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Sale updated');
  });
};

const deleteSale = (req, res) => {
  const saleId = req.params.id;
  Sale.delete(saleId, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Sale deleted');
  });
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
  updateSale,
  deleteSale,
};

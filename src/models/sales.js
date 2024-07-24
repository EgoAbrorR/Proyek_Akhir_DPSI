const db = require('../config');

const Sale = {
  getAll: (callback) => {
    const query = 'SELECT * FROM sales';
    db.query(query, callback);
  },
  getById: (id, callback) => {
    const query = 'SELECT * FROM sales WHERE id_sale = ?';
    db.query(query, [id], callback);
  },
  create: (sale, callback) => {
    const query = 'INSERT INTO sales (id_product, id_customer, quantity, total_price, sale_date) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [sale.id_product, sale.id_customer, sale.quantity, sale.total_price, sale.sale_date], callback);
  },
  update: (id, sale, callback) => {
    const query = 'UPDATE sales SET id_product = ?, id_customer = ?, quantity = ?, total_price = ?, sale_date = ? WHERE id_sale = ?';
    db.query(query, [sale.id_product, sale.id_customer, sale.quantity, sale.total_price, sale.sale_date, id], callback);
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM sales WHERE id_sale = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Sale;

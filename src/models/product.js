const db = require('../config');

const Product = {
  getAll: (callback) => {
    const query = 'SELECT * FROM products';
    db.query(query, callback);
  },
  getById: (id, callback) => {
    const query = 'SELECT * FROM products WHERE id_product = ?';
    db.query(query, [id], callback);
  },
  create: (product, callback) => {
    const query = 'INSERT INTO products (name, price, stock) VALUES (?, ?, ?)';
    db.query(query, [product.name, product.price, product.stock], callback);
  },
  update: (id, product, callback) => {
    const query = 'UPDATE products SET name = ?, price = ?, stock = ? WHERE id_product = ?';
    db.query(query, [product.name, product.price, product.stock, id], callback);
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM products WHERE id_product = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Product;

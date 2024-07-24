const db = require('../config');

const Customer = {
  getAll: (callback) => {
    const query = 'SELECT * FROM customers';
    db.query(query, callback);
  },
  getById: (id, callback) => {
    const query = 'SELECT * FROM customers WHERE id_customer = ?';
    db.query(query, [id], callback);
  },
  create: (customer, callback) => {
    const query = 'INSERT INTO customers (name, address, phone_number) VALUES (?, ?, ?)';
    db.query(query, [customer.name, customer.address, customer.phone_number], callback);
  },
  update: (id, customer, callback) => {
    const query = 'UPDATE customers SET name = ?, address = ?, phone_number = ? WHERE id_customer = ?';
    db.query(query, [customer.name, customer.address, customer.phone_number, id], callback);
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM customers WHERE id_customer = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Customer;

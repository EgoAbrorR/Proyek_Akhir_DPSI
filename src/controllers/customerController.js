const Customer = require('../models/customer');

const getAllCustomers = (req, res) => {
  Customer.getAll((err, customers) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(customers);
  });
};

const getCustomerById = (req, res) => {
  const customerId = req.params.id;
  Customer.getById(customerId, (err, customer) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!customer.length) {
      return res.status(404).send('Customer not found');
    }
    res.send(customer[0]);
  });
};

const createCustomer = (req, res) => {
  const { name, address, phone_number } = req.body;
  const customer = { name, address, phone_number };
  Customer.create(customer, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).send('Customer created');
  });
};

const updateCustomer = (req, res) => {
  const customerId = req.params.id;
  const { name, address, phone_number } = req.body;
  const customer = { name, address, phone_number };
  Customer.update(customerId, customer, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Customer updated');
  });
};

const deleteCustomer = (req, res) => {
  const customerId = req.params.id;
  Customer.delete(customerId, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Customer deleted');
  });
};

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};

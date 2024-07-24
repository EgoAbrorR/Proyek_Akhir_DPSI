const Product = require('../models/product');

const getAllProducts = (req, res) => {
  Product.getAll((err, products) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(products);
  });
};

const getProductById = (req, res) => {
  const productId = req.params.id;
  Product.getById(productId, (err, product) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!product.length) {
      return res.status(404).send('Product not found');
    }
    res.send(product[0]);
  });
};

const createProduct = (req, res) => {
  const { name, price, stock } = req.body;
  const product = { name, price, stock };
  Product.create(product, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).send('Product created');
  });
};

const updateProduct = (req, res) => {
  const productId = req.params.id;
  const { name, price, stock } = req.body;
  const product = { name, price, stock };
  Product.update(productId, product, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Product updated');
  });
};

const deleteProduct = (req, res) => {
  const productId = req.params.id;
  Product.delete(productId, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Product deleted');
  });
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};

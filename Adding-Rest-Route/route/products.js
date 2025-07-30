const express = require('express');
const products = express.Router();

const {
  getAllProducts,
  getSingleProduct,
  createPerson,
  updatePerson,
  deletePerson
} = require('../controllers/productsControllers');

products.get('/', getAllProducts);
products.get('/:id', getSingleProduct);
products.post('/', createPerson);
products.put('/:id', updatePerson);
products.delete('/:id', deletePerson);

module.exports = { products };

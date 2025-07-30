let { people } = require('../data/people');

// Get all products
const getAllProducts = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

// Get single product
const getSingleProduct = (req, res) => {
  const person = people.find(p => p.id === parseInt(req.params.id));
  if (!person) {
    return res.status(404).json({ success: false, msg: 'Product not found' });
  }
  res.json({ success: true, data: person });
};

// Create new person
const createPerson = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ success: false, msg: 'Please provide name and email' });
  }
  const newPerson = {
    id: people.length + 1,
    name,
    email,
  };
  people.push(newPerson);
  res.status(201).json({ success: true, data: newPerson });
};

// Update person
const updatePerson = (req, res) => {
  const person = people.find(p => p.id === parseInt(req.params.id));
  if (!person) {
    return res.status(404).json({ success: false, msg: 'Product not found' });
  }
  const { name, email } = req.body;
  if (name !== undefined) person.name = name;
  if (email !== undefined) person.email = email;
  res.json({ success: true, data: person });
};

// Delete person
const deletePerson = (req, res) => {
  const id = parseInt(req.params.id);
  const personExists = people.some(p => p.id === id);
  if (!personExists) {
    return res.status(404).json({ success: false, msg: 'Product not found' });
  }
  people = people.filter(p => p.id !== id);
  res.json({ success: true, msg: `Product with ID ${id} deleted` });
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createPerson,
  updatePerson,
  deletePerson,
};

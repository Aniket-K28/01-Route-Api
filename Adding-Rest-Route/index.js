const express = require('express');
const app = express();

// Import products router (not controller directly)
const { products } = require('./route/products');

// Middleware to parse JSON body
app.use(express.json());

// Mount router: all routes inside `products` will be prefixed with /api/id/products
app.use('/api/id/products', products);

// Start the server
app.listen(3000, () => {
  console.log('✅ Server running on port 3000');
});

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const products = [];

// Task 5: Middleware Implementation
function requestLogger(req, res, next) {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  console.log(`[${timestamp}] ${method} ${url}`);
  next();
}

app.use(requestLogger);
app.use(bodyParser.json());

// Task 4: RESTful API Development
app.get('/api/products', (req, res) => res.json(products));

app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (product) res.json(product);
  else res.status(404).json({ error: 'Product not found' });
});

app.post('/api/products', (req, res) => {
  const newProduct = req.body;
  newProduct.id = products.length + 1;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const updatedProduct = req.body;
  const index = products.findIndex((p) => p.id === productId);
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    res.json(products[index]);
  } else res.status(404).json({ error: 'Product not found' });
});

app.delete('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const index = products.findIndex((p) => p.id === productId);
  if (index !== -1) res.json(products.splice(index, 1)[0]);
  else res.status(404).json({ error: 'Product not found' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

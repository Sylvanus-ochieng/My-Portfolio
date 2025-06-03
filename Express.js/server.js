const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 700 },
];

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


// POST /api/products - Create a new product
app.post('/api/products', (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: 'Name and price are required.' });
  }

  // Create new product with a new id
  const newProduct = {
    id: products.length + 1,  // simple auto-increment
    name,
    price,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});


app.put('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const { name, price } = req.body;

  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  if (!name || !price) {
    return res.status(400).json({ message: 'Name and price are required' });
  }

  product.name = name;
  product.price = price;

  res.json(product);
});


app.delete('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  const productIndex = products.findIndex(p => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  products.splice(productIndex, 1);

  res.json({ message: 'Product deleted successfully' });
});


app.put('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });

  const { name, price } = req.body;
  product.name = name || product.name;
  product.price = price || product.price;

  res.json(product);
});

const products = require('../data/products');
const { v4: uuidv4 } = require('uuid');

// CREATE product
exports.createProduct = (req, res, next) => {
  try {
    const { name, description, price, category, inStock } = req.body;
    const newProduct = {
      id: uuidv4(),
      name,
      description,
      price: Number(price),
      category,
      inStock: Boolean(inStock),
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
};

// GET all products
exports.getProducts = (req, res) => {
  res.json(products);
};

// GET one product
exports.getProductById = (req, res, next) => {
  try {
    const { id } = req.params;
    const product = products.find(p => p.id === id);
    if (!product) {
      const err = new Error('Product not found');
      err.status = 404;
      throw err;
    }
    res.json(product);
  } catch (err) {
    next(err);
  }
};

// UPDATE product
exports.updateProduct = (req, res, next) => {
  try {
    const { id } = req.params;
    const index = products.findIndex(p => p.id == id);
    if (index === -1) {
      const err = new Error('Product not found');
      err.status = 404;
      throw err;
    }

    const { name, description, price, category, inStock } = req.body;
    products[index] = {
      ...products[index],
      name,
      description,
      price: Number(price),
      category,
      inStock: Boolean(inStock),
    };

    res.json(products[index]);
  } catch (err) {
    next(err);
  }
};

// DELETE product
exports.deleteProduct = (req, res, next) => {
  try {
    const { id } = req.params;
    const index = products.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Product not found');
    const deleted = products.splice(index, 1);
    res.json({ message: 'Product deleted', deleted: deleted[0] });
  } catch (err) {
    next(err);
  }
};

// SEARCH product by name
exports.searchProducts = (req, res, next) => {
  try {
    const { name } = req.query;
    if (!name) return res.json({ total: 0, data: [] });
    const q = name.toLowerCase();
    const matched = products.filter(p => p.name.toLowerCase().includes(q));
    res.json({ total: matched.length, data: matched });
  } catch (err) {
    next(err);
  }
};

// CATEGORY STATS
exports.productStats = (req, res, next) => {
  try {
    const stats = {};
    for (const p of products) {
      const cat = p.category || 'Uncategorized';
      stats[cat] = (stats[cat] || 0) + 1;
    }
    res.json({ total: products.length, countByCategory: stats });
  } catch (err) {
    next(err);
  }
};

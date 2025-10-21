const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middleware/auth');
const validateProduct = require('../middleware/validateProduct');

// Public Routes (no auth required)
router.get('/', productController.getProducts); // List all products
router.get('/search', productController.searchProducts); // Search by name
router.get('/stats', productController.productStats); // Stats by category
router.get('/:id', productController.getProductById); // Get product by ID

// Protected Routes (require API key)
router.post('/', auth, validateProduct, productController.createProduct); // Create product
router.put('/:id', auth, validateProduct, productController.updateProduct); // Update existing product
router.delete('/:id', auth, productController.deleteProduct); // Delete product

module.exports = router;

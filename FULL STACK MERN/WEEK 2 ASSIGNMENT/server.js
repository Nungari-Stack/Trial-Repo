require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const logger = require('./middleware/logger');
const { errorHandler, notFoundHandler } = require('./utils/errors');


const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(bodyParser.json()); // as requested in assignment
app.use(logger);


// Routes
app.use('/api/products', productRoutes);


// Hello world root route
app.get('/', (req, res) => {
res.send('API Server for Express JS is up and running....');
});


// 404 handler
app.use(notFoundHandler);


// Global error handler
app.use(errorHandler);


app.listen(PORT, () => {
console.log(`Server listening on port ${PORT}`);
});
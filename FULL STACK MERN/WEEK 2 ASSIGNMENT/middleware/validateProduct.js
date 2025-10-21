const { ValidationError } = require('../utils/errors');


module.exports = (req, res, next) => {
const { name, description, price, category, inStock } = req.body;
const errors = [];


if (!name || typeof name !== 'string' || name.trim().length < 2) {
errors.push('name is required and should be at least 2 chars');
}
if (!description || typeof description !== 'string') {
errors.push('description is required');
}
if (price === undefined || isNaN(Number(price))) {
errors.push('price is required and must be a number');
}
if (!category || typeof category !== 'string') {
errors.push('category is required');
}
if (inStock === undefined || typeof inStock !== 'boolean') {
errors.push('inStock is required and must be boolean');
}


if (errors.length) {
return next(new ValidationError(errors.join('; ')));
}
next();
};
class AppError extends Error {
constructor(message, status = 500) {
super(message);
this.status = status;
}
}


class NotFoundError extends AppError {
constructor(message = 'Not Found') {
super(message, 404);
}
}


class ValidationError extends AppError {
constructor(message = 'Validation Error') {
super(message, 400);
}
}


module.exports = {
AppError,
NotFoundError,
ValidationError,
// Express middleware
notFoundHandler: (req, res, next) => {
res.status(404).json({ error: 'Route not found' });
},
errorHandler: (err, req, res, next) => {
console.error(err);
if (err && err.status) {
return res.status(err.status).json({ error: err.message });
}
res.status(500).json({ error: 'Internal Server Error' });
}
};
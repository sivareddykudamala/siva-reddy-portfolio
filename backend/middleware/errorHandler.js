const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log error for debugging
  console.error('Error Stack:', err.stack);
  console.error('Error Details:', err);

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = 'Resource not found';
    error = { message, statusCode: 404 };
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = { message, statusCode: 400 };
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message).join('. ');
    error = { message, statusCode: 400 };
  }

  // Express validator errors
  if (err.type === 'validation') {
    const message = err.errors.map(e => e.msg).join('. ');
    error = { message, statusCode: 400 };
  }

  // Email service errors
  if (err.code === 'EAUTH') {
    const message = 'Email authentication failed. Please check email credentials.';
    error = { message, statusCode: 500 };
  }

  if (err.code === 'ECONNECTION') {
    const message = 'Email service connection failed. Please try again later.';
    error = { message, statusCode: 503 };
  }

  // Rate limiting errors
  if (err.type === 'RateLimitError') {
    const message = 'Too many requests. Please try again later.';
    error = { message, statusCode: 429 };
  }

  // Default to 500 server error
  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    error: message,
    ...(process.env.NODE_ENV === 'development' && { 
      stack: err.stack,
      details: err 
    })
  });
};

module.exports = errorHandler; 
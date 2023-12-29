exports.handleError = (res, error, statusCode = 500, customMessage = '') => {
  const errorMessage = customMessage || error.message;
  console.error('Error:', errorMessage);
  res.status(statusCode).json({ error: errorMessage });
};

const notFound = (req, res, next) => {
  res.status(404);

  res.json({
    error: `Route not found - ${req.originalUrl}`,
  });
};

module.exports = notFound;
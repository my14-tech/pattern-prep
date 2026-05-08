const Algorithm = require('../models/Algo');

exports.getAllAlgorithms = async (req, res, next) => {
  try {
    const algorithms = await Algorithm.find().sort('name');
    res.json(algorithms);
  } catch (error) {
    next(error);
  }
};

exports.getAlgorithmById = async (req, res, next) => {
  try {
    const algorithm = await Algorithm.findById(req.params.id);

    if (!algorithm) {
      return res.status(404).json({ error: 'Algorithm pattern not found' });
    }

    res.json(algorithm);
  } catch (error) {
    next(error);
  }
};

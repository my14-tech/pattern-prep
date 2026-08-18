const Pattern = require('../models/Pattern');

exports.getAllAlgorithms = async (req, res, next) => {
  try {
    const patterns = await Pattern.find().sort({ roadmapOrder: 1, name: 1 });
    res.json(patterns);
  } catch (error) {
    next(error);
  }
};

exports.getAlgorithmById = async (req, res, next) => {
  try {
    const pattern = await Pattern.findById(req.params.id);

    if (!pattern) {
      return res.status(404).json({ error: 'Pattern not found' });
    }

    res.json(pattern);
  } catch (error) {
    next(error);
  }
};

exports.createAlgorithm = async (req, res, next) => {
  try {
    const {
      name,
      category,
      description,
      difficulty,
      prerequisites,
      estimatedTime,
      roadmapOrder,
      resources,
      totalQuestions,
      popularityScore,
    } = req.body;

    if (!name || !category || !description) {
      return res.status(400).json({ error: 'Name, category, and description are required' });
    }

    const patternExists = await Pattern.findOne({ name });
    if (patternExists) {
      return res.status(400).json({ error: 'Pattern already exists' });
    }

    const pattern = await Pattern.create({
      name,
      category,
      description,
      difficulty,
      prerequisites,
      estimatedTime,
      roadmapOrder,
      resources,
      totalQuestions,
      popularityScore,
    });

    res.status(201).json(pattern);
  } catch (error) {
    next(error);
  }
};
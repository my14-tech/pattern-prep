const Question = require('../models/Question');

exports.getAllQuestions = async (req, res, next) => {
  try {
    const filter = {};

    if (req.query.algoId) {
      filter.algoId = req.query.algoId;
    }

    if (req.query.difficulty) {
      filter.difficulty = req.query.difficulty;
    }

    if (req.query.tag) {
      filter.tags = req.query.tag;
    }

    const questions = await Question.find(filter)
      .populate('algoId', 'name category')
      .sort({ createdAt: -1 });

    res.json(questions);
  } catch (error) {
    next(error);
  }
};

exports.getQuestionById = async (req, res, next) => {
  try {
    const question = await Question.findById(req.params.id).populate('algoId', 'name category');

    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }

    res.json(question);
  } catch (error) {
    next(error);
  }
};

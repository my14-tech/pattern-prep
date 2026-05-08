const Progress = require('../models/progress');

exports.createProgressEntry = async (req, res, next) => {
  try {
    const { userId, questionId, status, accuracy } = req.body;

    const progress = await Progress.create({
      userId,
      questionId,
      status,
      accuracy,
      solvedAt: status === 'completed' ? Date.now() : undefined,
    });

    res.status(201).json(progress);
  } catch (error) {
    next(error);
  }
};

exports.getProgressByUser = async (req, res, next) => {
  try {
    const progress = await Progress.find({ userId: req.params.userId })
      .populate({
        path: 'questionId',
        select: 'title difficulty algoId',
        populate: { path: 'algoId', select: 'name' },
      })
      .sort({ updatedAt: -1 });

    res.json(progress);
  } catch (error) {
    next(error);
  }
};

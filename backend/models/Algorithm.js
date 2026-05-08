const mongoose = require('mongoose');

const AlgorithmSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: '',
    },
    difficultyLevels: {
      type: [String],
      default: ['Easy', 'Medium', 'Hard'],
    },
    totalQuestions: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Algorithm', AlgorithmSchema);

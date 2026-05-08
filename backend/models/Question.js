const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: '',
    },
    difficulty: {
      type: String,
      enum: ['Easy', 'Medium', 'Hard'],
      required: true,
    },
    algoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Algorithm',
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    externalLink: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Question', QuestionSchema);

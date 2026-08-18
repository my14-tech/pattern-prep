const mongoose = require('mongoose');

const PatternSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      default: 'Beginner',
    },

    prerequisites: [
      {
        type: String,
      },
    ],

    estimatedTime: {
      type: String,
      default: '2 Hours',
    },

    roadmapOrder: {
      type: Number,
      default: 1,
    },

    resources: [
      {
        title: String,
        url: String,
      },
    ],

    totalQuestions: {
      type: Number,
      default: 0,
    },

    popularityScore: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Pattern', PatternSchema);
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('../config/db');
const Algorithm = require('../models/Algo');
const Question = require('../models/Question');

dotenv.config();

const algorithmSeed = [
  {
    name: 'Sliding Window',
    category: 'Arrays & Strings',
    description: 'A pattern for handling subarrays and substrings with a moving window.',
    difficultyLevels: ['Easy', 'Medium'],
    totalQuestions: 8,
  },
  {
    name: 'Two Pointers',
    category: 'Arrays & Sorting',
    description: 'Use two pointers to traverse the array from both ends or at different speeds.',
    difficultyLevels: ['Easy', 'Medium', 'Hard'],
    totalQuestions: 10,
  },
];

const questionSeed = [
  {
    title: 'Maximum Sum Subarray of Size K',
    description: 'Find the maximum sum of any contiguous subarray of size k.',
    difficulty: 'Easy',
    algoName: 'Sliding Window',
    tags: ['sliding-window', 'arrays'],
    externalLink: 'https://example.com/max-subarray-size-k',
  },
  {
    title: 'Pair With Target Sum',
    description: 'Find indices of two numbers that add up to a target value.',
    difficulty: 'Easy',
    algoName: 'Two Pointers',
    tags: ['two-pointers', 'sorting'],
    externalLink: 'https://example.com/pair-with-target-sum',
  },
];

const importData = async () => {
  try {
    await connectDB();

    await Algorithm.deleteMany();
    await Question.deleteMany();

    const createdAlgorithms = await Algorithm.insertMany(algorithmSeed);
    const algorithmMap = createdAlgorithms.reduce((map, algo) => {
      map[algo.name] = algo._id;
      return map;
    }, {});

    const seededQuestions = questionSeed.map((question) => ({
      title: question.title,
      description: question.description,
      difficulty: question.difficulty,
      algoId: algorithmMap[question.algoName],
      tags: question.tags,
      externalLink: question.externalLink,
    }));

    await Question.insertMany(seededQuestions);
    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error);
    process.exit(1);
  }
};

importData();

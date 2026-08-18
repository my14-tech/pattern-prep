const dotenv = require('dotenv');
const connectDB = require('../config/db');
const Pattern = require('../models/Pattern');
const Question = require('../models/Question');

dotenv.config();

const patternSeed = [
  {
    name: 'Sliding Window',
    category: 'Arrays & Strings',
    description: 'Use a moving window to solve subarray and substring problems efficiently.',
    difficulty: 'Beginner',
    prerequisites: ['Arrays', 'Hashing'],
    estimatedTime: '3 Hours',
    roadmapOrder: 1,
    totalQuestions: 8,
    popularityScore: 95,
    resources: [
      { title: 'Pattern Guide', url: 'https://example.com/sliding-window' },
      { title: 'Visual Explanation', url: 'https://example.com/sliding-window-visual' },
    ],
  },
  {
    name: 'Two Pointers',
    category: 'Arrays & Sorting',
    description: 'Use two pointers to traverse arrays efficiently from both ends or at different speeds.',
    difficulty: 'Beginner',
    prerequisites: ['Arrays'],
    estimatedTime: '2 Hours',
    roadmapOrder: 2,
    totalQuestions: 10,
    popularityScore: 90,
    resources: [{ title: 'Practice Set', url: 'https://example.com/two-pointers' }],
  },
];

const questionSeed = [
  {
    title: 'Maximum Sum Subarray of Size K',
    description: 'Find the maximum sum of any contiguous subarray of size k.',
    difficulty: 'Easy',
    patternName: 'Sliding Window',
    tags: ['sliding-window', 'arrays'],
    externalLink: 'https://leetcode.com',
  },
  {
    title: 'Pair With Target Sum',
    description: 'Find indices of two numbers that add up to a target value.',
    difficulty: 'Easy',
    patternName: 'Two Pointers',
    tags: ['two-pointers', 'arrays'],
    externalLink: 'https://www.geeksforgeeks.org',
  },
];

const importData = async () => {
  try {
    await connectDB();
    await Pattern.deleteMany();
    await Question.deleteMany();

    const createdPatterns = await Pattern.insertMany(patternSeed);
    const patternMap = createdPatterns.reduce((map, pattern) => {
      map[pattern.name] = pattern._id;
      return map;
    }, {});

    const seededQuestions = questionSeed.map((question) => ({
      title: question.title,
      description: question.description,
      difficulty: question.difficulty,
      algoId: patternMap[question.patternName],
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

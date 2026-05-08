const express = require('express');
const { getAllQuestions, getQuestionById } = require('../controllers/questionsController');

const router = express.Router();

router.get('/', getAllQuestions);
router.get('/:id', getQuestionById);

module.exports = router;

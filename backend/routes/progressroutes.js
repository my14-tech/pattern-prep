const express = require('express');
const { createProgressEntry, getProgressByUser } = require('../controllers/progressController');

const router = express.Router();

router.post('/', createProgressEntry);
router.get('/:userId', getProgressByUser);

module.exports = router;

const express = require('express');
const { getAllAlgorithms, getAlgorithmById } = require('../controllers/algorithmsController');

const router = express.Router();

router.get('/', getAllAlgorithms);
router.get('/:id', getAlgorithmById);

module.exports = router;

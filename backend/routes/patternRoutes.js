const express = require('express');

const {
  getAllAlgorithms,
  getAlgorithmById,
  createAlgorithm,
} = require('../controllers/algorithmsController');

const router = express.Router();

router.get('/', getAllAlgorithms);

router.get('/:id', getAlgorithmById);

router.post('/', createAlgorithm);

module.exports = router;
const express = require('express');
const router = express.Router();
const controllers = require('../controllers');
const { Trainer } = controllers;

router.post('/trainers', Trainer.createTrainer);
router.get('/trainers', Trainer.getAllTrainers);
router.get('/trainers/:trainerId', Trainer.getTrainerById);
router.get('/trainers/:firstName/:lastName/:city/:zip', Trainer.getTrainerByFilter);
router.put('/trainers/:trainerId', Trainer.updateTrainer);
router.delete('/trainers/:trainerId', Trainer.deleteTrainer); 

module.exports = router;

const models = require('../database/models');

const Trainer = models.Trainer;

const createTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.create(req.body);
    return res.status(201).json({
      trainer
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.findAll();
    return res.status(200).json({ trainers });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getTrainerByFilter = async (req, res) => {
  try {
    const { firstName, lastName, city, zip } = req.params;
    const trainer = await Trainer.findOne({
      where: { 
        firstName: firstName,
        lastName: lastName,
        city: city,
        zip: zip
      }
    });
    if (trainer) {
      return res.status(200).json({ trainer });
    }
    return res.status(404).send("Trainer with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getTrainerById = async (req, res) => {
  try {
    const { trainerId } = req.params;
    const trainer = await Trainer.findOne({
      where: { id: trainerId }
    });
    if (trainer) {
      return res.status(200).json({ trainer });
    }
    return res.status(404).send("Trainer with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateTrainer = async (req, res) => {
  try {
    const { trainerId } = req.params;
    const [updated] = await Trainer.update(req.body, {
      where: { id: trainerId }
    });
    if (updated) {
      const updatedTrainer = await Trainer.findOne({
        where: { id: trainerId } 
      });
      return res.status(200).json({ trainer: updatedTrainer });
    }
    throw new Error("Trainer not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteTrainer = async (req, res) => {
  try {
    const { trainerId } = req.params;
    const deleted = await Trainer.destroy({
      where: { id: trainerId }
    });
    if (deleted) {
      return res.status(204).send("Trainer deleted");
    }
    throw new Error("Trainer not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createTrainer,
  getAllTrainers,
  getTrainerById,
  getTrainerByFilter,
  updateTrainer,
  deleteTrainer
}
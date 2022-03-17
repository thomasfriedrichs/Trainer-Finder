const models = require('../database/models');

const Appointment = models.Appointment;

const createAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    return res.status(201).json({
      appointment
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll();
    return res.status(200).json({ appointments });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAppointmentById = async (req, res) => {
  try {
    const { appointmentId } = req.params;
    const appointment = await Appointment.findOne({
      where: { id: appointmentId }
    });
    if (appointment) {
      return res.status(200).json({ appointment });
    }
    return res.status(404).send("Appointment with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAppointmentsByTrainerId = async (req, res) => {
  try {
    const { trainerId } = req.params;
    const appointment = await Appointment.findAll({
      where: { trainderId: trainerId }
    });
    if (appointment) {
      return res.status(200).json({ appointment });
    }
    return res.status(404).send("Appointment with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAppointmentsByClientId = async (req, res) => {
  try {
    const { clientId } = req.params;
    const appointment = await Appointment.findAll({
      where: { clientId: clientId }
    });
    if (appointment) {
      return res.status(200).json({ appointment });
    }
    return res.status(404).send("Appointment with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.params;
    const [updated] = await Appointment.update(req.body, {
      where: { id: appointmentId }
    });
    if (updated) {
      const updatedAppointment = await Appointment.findOne({
        where: { id: appointmentId } 
      });
      return res.status(200).json({ appointment: updatedAppointment });
    }
    throw new Error("Appointment not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.params;
    const deleted = await Appointment.destroy({
      where: { id: appointmentId }
    });
    if (deleted) {
      return res.status(204).send("Appointment deleted");
    }
    throw new Error("Appointment not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  getAppointmentsByTrainerId,
  getAppointmentsByClientId,
  updateAppointment,
  deleteAppointment
}
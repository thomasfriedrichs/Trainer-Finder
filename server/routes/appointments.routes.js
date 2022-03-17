const express = require('express');
const router = express.Router();
const controllers = require('../controllers');
const { Appointment } = controllers;

router.post('/appointments', Appointment.createAppointment);
router.get('/appointments', Appointment.getAllAppointments);
router.get('/appointments/:appointmentId', Appointment.getAppointmentById);
router.get('/appointments/:trainerId', Appointment.getAppointmentsByTrainerId);
router.get('/appointments/:clientId', Appointment.getAppointmentsByClientId);
router.put('/appointments/:appointmentId', Appointment.updateAppointment);
router.delete('/appointments/:appointmentId', Appointment.deleteAppointment); 

module.exports = router;
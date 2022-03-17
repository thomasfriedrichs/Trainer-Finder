const express = require('express');
const router = express.Router();
const controllers = require('../controllers');
const { Client } = controllers;

router.post('/clients', Client.createClient);
router.get('/clients', Client.getAllClients);
router.get('/clients/:clientId', Client.getClientById);
router.put('/clients/:clientId', Client.updateClient);
router.delete('/clients/:clientId', Client.deleteClient);

module.exports = router;
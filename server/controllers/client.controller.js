const models = require('../database/models');

const Client = models.Client;

const createClient = async (req, res) => {
  try {
    const client = await Client.create(req.body);
    return res.status(201).json({
      client
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllClients = async (req, res) => {
  try {
    const clients = await Client.findAll();
    return res.status(200).json({ clients });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getClientById = async (req, res) => {
  try {
    const { clientId } = req.params;
    const client = await Client.findOne({
      where: { id: clientId }
    });
    if (client) {
      return res.status(200).json({ client });
    }
    return res.status(404).send("Client with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateClient = async (req, res) => {
  try {
    const { clientId } = req.params;
    const [updated] = await Client.update(req.body, {
      where: { id: clientId }
    });
    if (updated) {
      const updatedClient = await Client.findOne({
        where: { id: clientId } 
      });
      return res.status(200).json({ client: updatedClient });
    }
    throw new Error("Client not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteClient = async (req, res) => {
  try {
    const { clientId } = req.params;
    const deleted = await Client.destroy({
      where: { id: clientId }
    });
    if (deleted) {
      return res.status(204).send("Client deleted");
    }
    throw new Error("Client not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient
}
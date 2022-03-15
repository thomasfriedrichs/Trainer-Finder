'use strict';

const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];

const Trainer = require('./trainer');
const Client = require('./client');
const Appointment = require('./appointment');

require('dotenv').config();

const db = {
  Trainer: Trainer,
  Client: Client,
  Appointment: Appointment
};

let sequelize;
if (config.use_env_variable) {
  console.log('hello')
  sequelize = new Sequelize(
    process.env[config.use_env_variable], 
    config
  );
} else {
  console.log('goodbye')
  sequelize = new Sequelize(
    config.database, 
    config.user, 
    process.env.PASSWORD, 
    {
      host: 'localhost',
      dialect: 'mysql'
    }
  );
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

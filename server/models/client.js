'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate = models => {
      Client.hasMany(models.Appointment, {
        as: 'appointments'
      })
    }
  }
  Client.init({
    firstName:  DataTypes.STRING,
    lastName:  DataTypes.STRING,
    city: DataTypes.STRING,
    zip:  DataTypes.INTEGER,
    email: DataTypes.STRING,
    profileImage: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'Client',
  });
  Client.sync({ 
    alter: true
  });
  return Client;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate = models => {
        Appointment.belongsTo(models.Trainer, {
          foreignKey: 'trainerId',
          as: 'trainer'
        }),
        Appointment.belongsTo(models.Client, {
          foreignKey: 'clientId',
          as: 'client'
        })
      }
  }
  Appointment.init({
    trainerId: DataTypes.INTEGER,
    clientId: DataTypes.INTEGER,
    weekDay: DataTypes.STRING,
    date: DataTypes.DATE,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  Appointment.sync();
  return Appointment;
};
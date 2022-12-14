'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trainer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
    */
    static associate = models => {
      Trainer.hasMany(models.Appointment, {
        as: 'appointment'
      })
    }

  }
  Trainer.init({
    firstName:  DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    city: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    profileImage:  DataTypes.BLOB,
    bio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Trainer',
  });
  Trainer.sync();
  return Trainer;
};
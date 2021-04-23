'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Minerals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Minerals.init({
    name: DataTypes.STRING,
    quantity: DataTypes.NUMBER,
    distance: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Minerals',
  });
  return Minerals;
};
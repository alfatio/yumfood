'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dish.belongsTo(models.Vendor)
    }
  };
  Dish.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'name cannot be empty'},
        notNull: { msg: 'name cannot be empty'}
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: { msg: 'price only allow numbers'},
        notNegative(value){
          if( value < 0 ){
            throw new Error('price cannot be negative')
          }
        }
      }
    },
    VendorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'VendorId cannot be empty'},
        isNumeric: { msg: 'VendorId must be a number'}
      }
    }
  }, {
    sequelize,
    modelName: 'Dish'
  });
  return Dish;
};
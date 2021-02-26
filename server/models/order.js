'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Vendor)
    }
  };
  Order.init({
    DishId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'DishId cannot empty'},
        isNumeric: { msg: 'DishId only allow numbers'}
      }
    },
    VendorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'VendorId cannot empty'},
        isNumeric: { msg: 'VendorId only allow numbers'}
      }
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'amount cannot empty'},
        isNumeric: { msg: 'amount only allow numbers'},
        notNegative(value){
          if( value < 1 ){
            throw new Error('amount cannot be negative or zero')
          }
        }
      }
    },
    request: DataTypes.TEXT,
    status: {
      type: DataTypes.STRING,
      defaultValue: '0'
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
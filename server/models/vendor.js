'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vendor.hasMany(models.Dish)
      Vendor.hasMany(models.Order)
      Vendor.belongsToMany(models.Tag, { through: models.VendorTag })
    }
  };
  Vendor.init({
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
      validate: {
        notEmpty: { msg: 'name cannot be empty'},
        notNull: { msg: 'name cannot be empty'}
      },
      unique: {
        msg: 'name already been used'
      }
    },
    logo: DataTypes.STRING(500)
  }, {
    sequelize,
    modelName: 'Vendor',
  });
  return Vendor;
};
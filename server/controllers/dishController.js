const { Dish, Vendor } = require('../models')

class dishController {

  static async getDish(req,res){
    try {
      const dishes = await Vendor.findAll({
        where: {
          id: req.params.vendorId
        },
        include: [Dish]
      })
      res.status(200).json(dishes)
    } catch (err) {
      res.status(500).json({ message: "internal server error" })
    }
  }

  static async postDish(req,res){
    let obj = {
      name: req.body.name,
      price: +req.body.price,
      VendorId: +req.params.vendorId
    }
    try {
      const dish = await Dish.findOne({
        where: {
          name: obj.name,
          VendorId: obj.VendorId
        }
      })
      if(dish){
        throw {
          message: "dish name already exist"
        }
      }
      const newDish = await Dish.create(obj)
      res.status(201).json({ dishes: newDish })
    } catch (err) {
      if(err.message){
        res.status(400).json({ message: err.message })
      }else{
        res.status(500).json({ message: "internal server error" })
      }
    }

  }

  static async putDish(req,res){
    let dishId = +req.params.dishId,
        obj = {
          name: req.body.name,
          price: +req.body.price,
          VendorId: +req.params.vendorId
        }
    try {
      const dishCheck = await Dish.findOne({
        where: {
          name: obj.name,
          VendorId: obj.VendorId
        }
      })
      if(dishCheck){
        throw {
          message: "dish name already exist"
        }
      }
      const dish = await Dish.update(obj,{
        where: {
          id: dishId
        },
        returning: true,
        plain: true
      })
      res.status(200).json({ status: 'ok', dishes: dish})
    } catch (err) {
      if(err.message){
        res.status(400).json({ message: err.message })
      }else{
        res.status(500).json({ message: "internal server error" })
      }
    }
  }

  static async deleteDish(req,res){
    try {
      await Dish.destroy({
        where: {
          id: +req.params.dishId,
          VendorId: +req.params.vendorId
        }
      })
      res.status(200).json({ message: 'ok' })  
    } catch (err) {
      res.status(500).json({ message: "internal server error" })
    }
  }

}


module.exports = dishController
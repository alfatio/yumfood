const { Order } = require('../models')

class OrderController {

  static async getAll(req,res){
    try {
      const orders = await Order.findAll()
      res.status(200).json({ orders })
    } catch (err) {
      res.status(500).json({ message: "internal server error" })
    }
  }

  static async getOrder(req,res){
    try {
      const orders = await Order.findAll({
        where: {
          VendorId: +req.params.vendorId
        },
        order: [['id','DESC']]
      })
      res.status(200).json({ orders })
    } catch (err) {
      res.status(500).json({ message: "internal server error" })
    }
  }

  static async postOrder(req,res){
    let obj = {
      DishId: +req.body.DishId,
      VendorId: +req.params.vendorId,
      amount: +req.body.amount,
      request: req.body.request
    }
    try {
      const order = await Order.create(obj)
      res.status(201).json({ orders: order})
    } catch (err) {
      console.log(err);
      if(err.message){
        res.status(400).json({ message: err.message })
      }else{
        res.status(500).json({ message: "internal server error" })
      }
    }
  }

  static async putOrder(req,res){
    let obj = {
      amount: +req.body.amount,
      request: req.body.request
    },
    id = req.params.orderId
    try {
      const order = await Order.update(obj,{
        where: {
          id: id
        },
        returning: true,
        plain: true
      })
      
      res.status(200).json({ orders: order[1] })
    } catch (err) {
      if(err.message){
        res.status(400).json({ message: err.message })
      }else{
        res.status(500).json({ message: "internal server error" })
      }
    }
  }

  static async patchOrder(req,res){
    let obj = {
      status: req.body.status
    }
    try {
      const order = await Order.update(obj,{
        where: {
          id: +req.params.orderId
        },
        returning: true,
        plain: true
      })
      res.status(200).json({ orders: order })
    } catch (err) {
      if(err.message){
        res.status(400).json({ message: err.message })
      }else{
        res.status(500).json({ message: "internal server error" })
      }
    }
  }

  static async deleteOrder(req,res){
    let id = req.params.orderId
    try {
      await Order.destroy({
        where: {
          id: id
        }
      })
      res.status(200).json({ message: 'ok' })
    } catch (err) {
      if(err.message){
        res.status(400).json({ message: err.message })
      }else{
        res.status(500).json({ message: "internal server error" })
      }
    }
  }
}

module.exports = OrderController
const routes = require('express').Router()
const { OrderController } = require('../controllers')

routes.get('/all',OrderController.getAll)

routes.get('/:vendorId',OrderController.getOrder)
routes.post('/:vendorId',OrderController.postOrder)

routes.put('/:orderId',OrderController.putOrder)
routes.patch('/:orderId',OrderController.patchOrder)
routes.delete('/:orderId',OrderController.deleteOrder)

module.exports = routes
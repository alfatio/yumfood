const routes = require('express').Router()
const { DishController } = require('../controllers')

routes.get('/:vendorId', DishController.getDish)
routes.post('/:vendorId',DishController.postDish)
routes.put('/:vendorId/:dishId',DishController.putDish)
routes.delete('/:vendorId/:dishId',DishController.deleteDish)

module.exports = routes
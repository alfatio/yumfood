const routes = require('express').Router()
const vendorRoute = require('./vendorRoute')
const dishRoute = require('./dishRoute')
const orderRoute = require('./orderRoute')
const tagRoute = require('./tagRoute')

routes.use('/v1/vendors',vendorRoute)
routes.use('/v1/dishes',dishRoute)
routes.use('/v1/orders',orderRoute)
routes.use('/v1/tags',tagRoute)

module.exports = routes
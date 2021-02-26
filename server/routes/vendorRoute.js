const routes = require('express').Router()
const { VendorController } = require('../controllers/index')

routes.get('/',VendorController.getVendor)
routes.post('/',VendorController.postVendor)
routes.put('/:vendorId',VendorController.putVendor)
routes.delete('/:vendorId',VendorController.deleteVendor)

module.exports = routes
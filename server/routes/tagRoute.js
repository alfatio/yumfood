const routes = require('express').Router()
const { TagController } = require('../controllers')

routes.get('/', TagController.getTag)
routes.post('/', TagController.postTag)
routes.put('/:tagId', TagController.putTag)
routes.delete('/:tagId', TagController.deleteTag)

module.exports = routes
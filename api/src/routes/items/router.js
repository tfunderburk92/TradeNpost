const { Router } = require('express')
const { showAllItems, getById, updateItem, deleteItem, addItem, getByUserId, searchItems } = require('./controller')

//import middleware
const { authenticate } = require('../../middleware/auth')

// create a new Router instance
const router = new Router()

// define routes
router.get('/', showAllItems) // localhost:9000/items
router.get('/get-items/:userId', getByUserId) // localhost:9000/items/get-items/1
router.post('/', addItem)
router.get('/search/:userId/:search', searchItems)
router.get('/:itemId', getById)
router.delete('/:itemId', deleteItem)
router.patch('/:itemId', updateItem)
// router.patch was used to modify data
// exporting router
module.exports = router
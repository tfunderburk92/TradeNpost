const { Router } = require('express')
const { showAllItems, getById, updateItem, deleteItem, addItem } = require('./controller')

//import middleware
const { authenticate } = require('../../middleware/auth')

// create a new Router instance
const router = new Router()

// define routes

router.get('/', showAllItems)
router.post('/', addItem)
router.get('/:itemId', getById)
router.delete('/:itemId', deleteItem)
router.patch('/:itemId', updateItem)
// router.patch was used to modify data
// exporting router
module.exports = router
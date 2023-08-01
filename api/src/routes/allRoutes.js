const { Router } = require('express')

// import routes
const root = require('./root/router')
const users = require('./users/router')
const items = require('./items/router')
const listings = require('./listings/router')
const offers = require('./offers/router')
// create a new Router instance
const allRouters = new Router()

// create base routes
allRouters.use('/', root)
allRouters.use('/users', users)
allRouters.use('/items', items)
allRouters.use('/listings', listings)
allRouters.use('/offers', offers)

// exporting router
module.exports = allRouters
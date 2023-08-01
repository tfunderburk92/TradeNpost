const { Router } = require('express')
const { showAllOffers } = require('./controller')

//import middleware
const { authenticate } = require('../../middleware/auth')

// create a new Router instance
const router = new Router()

// define routes

router.get('/', showAllOffers)
// router.get('/:id', showReportById)
// router.get('/userid/:userId', showReportByUserId)
// router.get('/county/:county', showCountyReports)
// router.put('/update/', authenticate, updateUserReports )
// router.delete('/delete/:id', authenticate, deleteUserReport)

// exporting router
module.exports = router
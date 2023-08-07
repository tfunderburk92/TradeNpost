const { Router } = require('express')
const { showAllListings, searchListings, getById } = require('./controller')

//import middleware
const { authenticate } = require('../../middleware/auth')

// create a new Router instance
const router = new Router()

// define routes

router.get('/', showAllListings)
router.get('/search/:search', searchListings)
// New route that gets a listing by its ID
router.get('/:listingId', getById)
// router.get('/userid/:userId', showReportByUserId)
// router.get('/county/:county', showCountyReports)
// router.put('/update/', authenticate, updateUserReports )
// router.delete('/delete/:id', authenticate, deleteUserReport)

// exporting router
module.exports = router
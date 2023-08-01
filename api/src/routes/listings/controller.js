require('dotenv').config()

const { findAllListings } = require('./service')


exports.showAllListings = async (req, res) => {
    try {
      const allListings = await findAllListings(req.params)
      console.log('allListings: ', allListings)
      return res.json(allListings)
  
    } catch (error) {
      console.log(error)
      return res.status(500).json()
    }
  }
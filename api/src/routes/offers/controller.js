require('dotenv').config()

const { findAllOffers } = require('./service')

// returns all of the offers in the table 
exports.showAllOffers = async (req, res) => {
    try {
      const allOffers = await findAllOffers(req.params)
      return res.json(allOffers)
  
    } catch (error) {
      console.log(error)
      return res.status(500).json()
    }
  }
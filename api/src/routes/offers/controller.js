require('dotenv').config()

const { findAllOffers } = require('./service')


exports.showAllOffers = async (req, res) => {
    try {
      const allOffers = await findAllOffers(req.params)
      console.log('allOffers: ', allOffers)
      return res.json(allOffers)
  
    } catch (error) {
      console.log(error)
      return res.status(500).json()
    }
  }
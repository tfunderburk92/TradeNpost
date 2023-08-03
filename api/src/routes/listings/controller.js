require('dotenv').config()

const { findAllListings, searchAllListings } = require('./service')


exports.showAllListings = async (req, res) => {
    try {
      const allListings = await findAllListings(req.params)
      return res.json(allListings)
  
    } catch (error) {
      console.log(error)
      return res.status(500).json()
    }
  }




// Returns all listings that are pretty similar to our search criteria
exports.searchListings = async (req, res) => {
  try {
    const foundListings = await searchAllListings(req.params.search)
    return res.json(foundListings)

  } catch (error) {
    console.log(error)
    return res.status(500).json()
  }
}
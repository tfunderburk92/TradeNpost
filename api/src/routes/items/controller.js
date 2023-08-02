require('dotenv').config()

const { findAllItems } = require('./service')


exports.showAllItems = async (req, res) => {
    try {
      const allItems = await findAllItems(req.params)
      console.log('allItems: ', allItems)
      return res.json(allItems)
  
    } catch (error) {
      console.log(error)
      return res.status(500).json()
    }
  }
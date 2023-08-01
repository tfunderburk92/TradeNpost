const knex = require('../../knex.js')

exports.findAllListings = async () => {
    const listing = await knex('listing').select("*")
    console.log('listings: ', listing)
  
    return listing
  }
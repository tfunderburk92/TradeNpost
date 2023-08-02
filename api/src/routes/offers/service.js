const knex = require('../../knex.js')

exports.findAllOffers = async () => {
    const offers = await knex('offer').select("*")  
    return offers
  }
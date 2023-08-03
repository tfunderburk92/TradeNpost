const knex = require('../../knex.js')

exports.findAllListings = async () => {
    const listing = await knex('listing').join('item', 'listing.itemId', '=', 'item.itemId')
    return listing
  }


  exports.searchAllListings = async (search) => {
    const results = await knex('listing').join('item', 'listing.itemId', '=', 'item.itemId')
                .whereILike('itemName', search)
                .orWhereILike('description', search)
  
  
    return results;
  };
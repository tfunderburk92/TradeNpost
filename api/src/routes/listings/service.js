const knex = require('../../knex.js')

exports.findAllListings = async () => {
  const listing = await knex('listing').join('item', 'listing.itemId', '=', 'item.itemId')
    return listing
  }


  exports.searchAllListings = async (search) => {
    const results = await knex('listing').join('item', 'listing.itemId', '=', 'item.itemId')  //.join('item', 'listing.listingId', '=', 'item.listingId')
                .whereILike('itemName', `%${search}%`)
                .orWhereILike('description', `%${search}%`)
  
  
    return results;
  };



// gets a listing by its ID
exports.findById = async (listingId) => {
  const item = await knex("listing")
  // This join uses the userId/ItemId that is in listing
  // Then goes into each table and grabs the specific user/item that matches
  .join('item', 'listing.itemId', '=', 'item.itemId')
  .join('users', 'listing.userId', '=', 'users.userId')
  .where("listingId", listingId).first("*");
  return item;
};
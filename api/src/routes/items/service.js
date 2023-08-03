const knex = require("../../knex.js");
const bcrypt = require("bcrypt");

// Returns all the items in the table
exports.findAllItems = async () => {
  const results = await knex("item").select("*");

  return results;
};






// Returns all items found in our search
exports.searchAllItems = async (userId, search) => {
  console.log('search', search)
  const results = await knex('item')
              .where('userId', userId)
              .whereILike('itemName', search)
              .orWhereILike('description', search)


  return results;
};





// gets an item by its ID
exports.findById = async (itemId) => {
  const item = await knex("item").where("itemId", itemId).first("*");
  return item;
};


// gets all items that have a specific userId
exports.findByUserId = async (userId) => {
  const item = await knex("item").where("userId", userId);
  return item;
};


// Inserts a new item
exports.insertItem = async (data) => {

  const createdItem = await knex("item")
    .insert(data)
    .returning(["itemId", "itemName", "description", "quantity"]);
  return createdItem;
};

// Deletes an item
exports.destroyItem = async (itemId) => {
  const deletedItem = await knex("item").delete().where("itemId", itemId);
  return deletedItem;
};

// Modifies an item
exports.modifyItem = async (itemData, itemId) => {
  // Insert the item data into the database and return
  return await knex('users').update(itemData).where('userId', itemId) // return the data you need excluding the password
}

// creates an item in the database
exports.createItem = async (itemData) => {
 
  // Insert the user into the database and return
  return await knex("item")
    .insert(
      itemData,
    )
    .returning(["itemId", "itemName", "description", "quantity"]); // return the data you need excluding the password
};


// gets an item by its name, rather than its id
exports.findByItemName = async (itemName) => {
  // Find the first item in the database with the itemName
  const user = await knex("item").where("itemName", itemName).first("*");
  return user;
};

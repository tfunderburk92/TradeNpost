require('dotenv').config()

const { findAllItems, createItem, destroyItem,findById, findByItemName, insertItem, modifyItem, findByUserId, searchAllItems } = require('./service')


// Returns all of the items inside the item table
exports.showAllItems = async (req, res) => {
    try {
      const allItems = await findAllItems(req.params)
      return res.json(allItems)
  
    } catch (error) {
      console.log(error)
      return res.status(500).json()
    }
}





// Returns all items that are pretty similar to our search criteria
exports.searchItems = async (req, res) => {
  try {
    const foundItems = await searchAllItems(req.params.userId, req.params.search)
    return res.json(foundItems)

  } catch (error) {
    console.log(error)
    return res.status(500).json()
  }
}




 
//  Deletes an item from the item table
exports.deleteItem = async (req, res) => {
  const itemId = req.params.itemId
  try {
    const deletedItem = await destroyItem(itemId)
    return res.json(deletedItem)

  } catch (error) {
    console.log(error)
    return res.status(500).json()
  }
}

//  updates the data of a specific item
exports.updateItem = async (req, res) => {
  const itemId = req.body.itemId
  const itemData = req.body
  try {
    const updatedItem =  await modifyItem(itemData, itemId)
    return res.json(updatedItem)

  } catch (error) {
    console.log(error)
    return res.status(500).json()
  }
}

//  returns a specific item by its id
exports.getById = async (req, res) => {
  try {
    const item = await findById(req.params.itemId);
    if (item.itemId != req.params.itemId) {
      return res
        .status(403)
        .json({ error: "You do not have permission to access this resource" });
    }

    const foundItem = await findById(req.params.itemId);
    console.log(foundItem);
    if (!foundItem) {
      return res.status(404).json("No item Found");
    }

    return res.json(foundItem);
  } catch (error) {
    console.log(error);
    return res.status(500).json();
  }
};








//  returns all items that have a specific userId
exports.getByUserId = async (req, res) => {
  try {
    const items = await findByUserId(req.params.userId);
    console.log(items);
    if (!items) {
      return res.json([]);
    }

    return res.json(items);
  } catch (error) {
    console.log(error);
    return res.status(500).json();
  }
};








exports.addItem = async (req, res) => {
  try {
    const itemData = req.body;
   
    const item = await createItem(itemData);
    return res.json(item);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
require('dotenv').config()

const { findAllListings, searchAllListings, findById } = require('./service')


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


//  returns a specific listing by its id
exports.getById = async (req, res) => {
  try {
    const item = await findById(req.params.listingId);
    if (item.listingId != req.params.listingId) {
      return res
        .status(403)
        .json({ error: "You do not have permission to access this resource" });
    }

    const foundItem = await findById(req.params.listingId);
    if (!foundItem) {
      return res.status(404).json("No item Found");
    }

    return res.json(foundItem);
  } catch (error) {
    console.log(error);
    return res.status(500).json();
  }
};

const knex = require('../../knex.js')

exports.findAllItems = async () => {
    const items = await knex('item').select("*")
    console.log('items: ', items)
  
    return items
  }
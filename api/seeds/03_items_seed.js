/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const mockItemData = require('./data/mockItemData.json')
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('item').del()
  await knex('item').insert(mockItemData);
};

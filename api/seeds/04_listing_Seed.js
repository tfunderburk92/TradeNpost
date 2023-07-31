/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const mockListingData = require('./data/mockListingData.json')
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('listing').del()
  await knex('listing').insert(mockListingData);
};

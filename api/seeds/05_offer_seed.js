/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const mockOfferData = require('./data/mockOfferData.json')
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('offer').del()
  await knex('offer').insert(mockOfferData);
};

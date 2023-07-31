/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const mockMessageData = require('./data/mockMessageTable.json')
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('message').del()
  await knex('message').insert(mockMessageData);
};

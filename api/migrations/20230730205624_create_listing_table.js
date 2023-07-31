/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('listing', function(table) {
        table.increments('listingId').primary();
        table.integer('itemId').unsigned().references('itemId').inTable('item');
        table.integer('userId').unsigned().references('userId').inTable('users');
        table.date('expiryDate').notNullable();
        table.date('created_at').notNullable().defaultTo(knex.fn.now());
        table.date('modified_at').notNullable().defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('listing');
};

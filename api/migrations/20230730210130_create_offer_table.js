/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('offer', function(table) {
        table.increments('offerId').primary();
        table.integer('listingId').unsigned().references('listingId').inTable('listing');
        table.integer('userId').unsigned().references('userId').inTable('users');
        table.date('offerDate').notNullable();
        table.text('offerMessage').notNullable();
        table.integer('itemId').unsigned().references('itemId').inTable('item');
        table.date('created_at').notNullable().defaultTo(knex.fn.now());
        table.date('modified_at').notNullable().defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('offer');
};

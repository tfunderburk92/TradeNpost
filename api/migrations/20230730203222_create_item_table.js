/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('item', function(table) {
        table.increments('itemId').primary();
        table.string('itemName', 100);
        table.string('description', 250).notNullable();
        table.string('imageURL');
        table.integer('userId').unsigned().references('userId').inTable('users');
        table.integer('quantity').notNullable();
        table.date('created_at').notNullable().defaultTo(knex.fn.now());
        table.date('modified_at').notNullable().defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('item');
};

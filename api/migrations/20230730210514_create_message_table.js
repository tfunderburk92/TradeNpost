/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('message', function(table) {
        table.increments('messageId').primary();
        table.bigInteger('senderId').notNullable();
        table.bigInteger('recieverId').notNullable();
        table.text('messageContent').notNullable();
        table.boolean('messageStat').notNullable();
        table.dateTime('timeStamp').notNullable();
        table.date('created_at').notNullable().defaultTo(knex.fn.now());
        table.date('modified_at').notNullable().defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('message');
};

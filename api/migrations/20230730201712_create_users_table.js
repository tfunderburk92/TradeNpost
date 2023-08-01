/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments('userId').primary();
    table.string('username', 50).notNullable().unique();
    table.string('email', 150).notNullable().unique();
    table.string('passwordHash', 72).notNullable();
    table.string('profilePicture');
    table.string('firstName', 50).notNullable();
    table.string('lastName', 50).notNullable();
    table.enu('role', ['user', 'admin']).notNullable().defaultTo('user');
    table.date('created_at').notNullable().defaultTo(knex.fn.now());
    table.date('modified_at').notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};

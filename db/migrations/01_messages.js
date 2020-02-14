
exports.up = function(knex) {
    return knex.schema.createTable('messages', function (table) {
        table.increments();
        table.string('name').notNullable();
        table.message('message').notNullable();
        table.datetime('created_at').notNull();
        table.datetime('updated_at').notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.createTable('messages');
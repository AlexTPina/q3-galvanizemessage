
exports.up = function(knex, Promise) {
    return knex.schema.createTable('messages', function (table) {
        table.increments();
        table.string('name').notNullable();
        table.string('message').notNullable();
        table.datetime('created_at').notNull();
        table.datetime('updated_at').notNullable()
  })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('messages')
};
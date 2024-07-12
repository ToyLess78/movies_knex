exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.increments('id').primary();
        table.string('username', 50).notNullable();
        table.string('first_name', 50).notNullable();
        table.string('last_name', 50).notNullable();
        table.string('email', 100).notNullable();
        table.string('password', 100).notNullable();
        table.integer('avatar_id').references('id').inTable('files');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};

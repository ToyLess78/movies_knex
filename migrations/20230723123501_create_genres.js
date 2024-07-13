exports.up = function(knex) {
    return knex.schema.createTable('genres', function(table) {
        table.increments('id').primary();
        table.string('name', 50).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('genres');
};

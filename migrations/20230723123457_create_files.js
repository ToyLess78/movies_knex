exports.up = function(knex) {
    return knex.schema.createTable('files', function(table) {
        table.increments('id').primary();
        table.string('file_name', 255).notNullable();
        table.string('mime_type', 50).notNullable();
        table.string('key', 255).notNullable();
        table.string('url', 255).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('files');
};

exports.up = function(knex) {
    return knex.schema.createTable('persons', function(table) {
        table.increments('id').primary();
        table.string('first_name', 50).notNullable();
        table.string('last_name', 50).notNullable();
        table.text('biography');
        table.date('date_of_birth');
        table.string('gender', 10);
        table.integer('country_id');
        table.integer('primary_photo_id').references('id').inTable('files');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('persons');
};

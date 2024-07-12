exports.up = function(knex) {
    return knex.schema.createTable('movies', function(table) {
        table.increments('id').primary();
        table.string('title', 255).notNullable();
        table.text('description');
        table.integer('budget');
        table.date('release_date');
        table.integer('duration');
        table.integer('director_id').references('id').inTable('persons');
        table.integer('country_id');
        table.integer('poster_id').references('id').inTable('files');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('movies');
};

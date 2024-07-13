exports.up = function(knex) {
    return knex.schema.createTable('movie_genres', function(table) {
        table.integer('movie_id').references('id').inTable('movies');
        table.integer('genre_id').references('id').inTable('genres');
        table.primary(['movie_id', 'genre_id']);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('movie_genres');
};

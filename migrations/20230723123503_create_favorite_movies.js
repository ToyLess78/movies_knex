exports.up = function(knex) {
    return knex.schema.createTable('favorite_movies', function(table) {
        table.integer('user_id').references('id').inTable('users');
        table.integer('movie_id').references('id').inTable('movies');
        table.primary(['user_id', 'movie_id']);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('favorite_movies');
};

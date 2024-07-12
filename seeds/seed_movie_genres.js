exports.seed = function(knex) {
    return knex('movie_genres').del()
        .then(function () {
            return knex('movie_genres').insert([
                {movie_id: 1, genre_id: 1},
                {movie_id: 1, genre_id: 2}
            ]);
        });
};

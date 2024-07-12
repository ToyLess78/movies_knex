exports.seed = function(knex) {
    return knex('favorite_movies').del()
        .then(function () {
            return knex('favorite_movies').insert([
                {user_id: 1, movie_id: 1}
            ]);
        });
};

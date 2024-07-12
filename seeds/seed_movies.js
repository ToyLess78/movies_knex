exports.seed = function(knex) {
    return knex('movies').del()
        .then(function () {
            return knex('movies').insert([
                {title: 'Inception', description: 'A mind-bending thriller', budget: 160000000, release_date: '2010-07-16', duration: 148, director_id: 1, country_id: 1, poster_id: 2}
            ]);
        });
};

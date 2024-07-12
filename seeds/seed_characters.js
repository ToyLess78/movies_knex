exports.seed = function(knex) {
    return knex('characters').del()
        .then(function () {
            return knex('characters').insert([
                {name: 'Cobb', description: 'Main character', role: 'leading', movie_id: 1, person_id: 1}
            ]);
        });
};

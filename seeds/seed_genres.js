exports.seed = function(knex) {
    return knex('genres').del()
        .then(function () {
            return knex('genres').insert([
                {name: 'Action'},
                {name: 'Drama'}
            ]);
        });
};

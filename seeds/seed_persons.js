exports.seed = function(knex) {
    return knex('persons').del()
        .then(function () {
            return knex('persons').insert([
                {first_name: 'Christopher', last_name: 'Nolan', biography: 'British-American film director', date_of_birth: '1970-07-30', gender: 'male', country_id: 1, primary_photo_id: 1}
            ]);
        });
};

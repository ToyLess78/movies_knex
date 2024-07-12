exports.seed = function(knex) {
    return knex('users').del()
        .then(function () {
            return knex('users').insert([
                {username: 'john_doe', first_name: 'John', last_name: 'Doe', email: 'john@example.com', password: 'password123', avatar_id: 1}
            ]);
        });
};

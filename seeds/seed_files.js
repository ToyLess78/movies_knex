exports.seed = function(knex) {
    return knex('files').del()
        .then(function () {
            return knex('files').insert([
                {file_name: 'avatar.png', mime_type: 'image/png', key: 'avatars/avatar.png', url: 'https://example.com/avatars/avatar.png'},
                {file_name: 'poster.png', mime_type: 'image/png', key: 'posters/poster.png', url: 'https://example.com/posters/poster.png'}
            ]);
        });
};

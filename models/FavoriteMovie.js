const knex = require('../knexfile');

class FavoriteMovie {
    static async getAll() {
        return knex('favorite_movies');
    }

    static async getById(id) {
        return knex('favorite_movies').where({ id }).first();
    }

    static async create(favoriteMovie) {
        return knex('favorite_movies').insert(favoriteMovie).returning('*');
    }

    static async update(id, favoriteMovie) {
        return knex('favorite_movies').where({ id }).update(favoriteMovie).returning('*');
    }

    static async delete(id) {
        return knex('favorite_movies').where({ id }).del();
    }

    static async getByUserId(userId) {
        return knex('favorite_movies').where({ user_id: userId });
    }
}

module.exports = FavoriteMovie;

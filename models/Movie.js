const knex = require('../knexfile');

class Movie {
    static async getAll() {
        return knex('movies');
    }

    static async getById(id) {
        return knex('movies').where({ id }).first();
    }

    static async create(movie) {
        return knex('movies').insert(movie).returning('*');
    }

    static async update(id, movie) {
        return knex('movies').where({ id }).update(movie).returning('*');
    }

    static async delete(id) {
        return knex('movies').where({ id }).del();
    }
}

module.exports = Movie;

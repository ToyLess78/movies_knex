const knex = require('../knexfile');

class MovieGenre {
    static async getAll() {
        return knex('movie_genres');
    }

    static async getById(movie_id, genre_id) {
        return knex('movie_genres').where({ movie_id, genre_id }).first();
    }

    static async create(movie_genre) {
        return knex('movie_genres').insert(movie_genre).returning('*');
    }

    static async delete(movie_id, genre_id) {
        return knex('movie_genres').where({ movie_id, genre_id }).del();
    }
}

module.exports = MovieGenre;

const knex = require('../knexfile');

class Genre {
    static async getAll() {
        return knex('genres');
    }

    static async getById(id) {
        return knex('genres').where({ id }).first();
    }

    static async create(genre) {
        return knex('genres').insert(genre).returning('*');
    }

    static async update(id, genre) {
        return knex('genres').where({ id }).update(genre).returning('*');
    }

    static async delete(id) {
        return knex('genres').where({ id }).del();
    }
}

module.exports = Genre;

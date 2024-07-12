const knex = require('../knexfile');

class Character {
    static async getAll() {
        return knex('characters');
    }

    static async getById(id) {
        return knex('characters').where({ id }).first();
    }

    static async create(character) {
        return knex('characters').insert(character).returning('*');
    }

    static async update(id, character) {
        return knex('characters').where({ id }).update(character).returning('*');
    }

    static async delete(id) {
        return knex('characters').where({ id }).del();
    }
}

module.exports = Character;

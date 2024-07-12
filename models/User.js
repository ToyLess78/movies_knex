const knex = require('../knexfile');

class User {
    static async getAll() {
        return knex('users');
    }

    static async getById(id) {
        return knex('users').where({ id }).first();
    }

    static async create(user) {
        return knex('users').insert(user).returning('*');
    }

    static async update(id, user) {
        return knex('users').where({ id }).update(user).returning('*');
    }

    static async delete(id) {
        return knex('users').where({ id }).del();
    }
}

module.exports = User;

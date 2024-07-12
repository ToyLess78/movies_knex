const knex = require('../knexfile');

class Person {
    static async getAll() {
        return knex('persons');
    }

    static async getById(id) {
        return knex('persons').where({ id }).first();
    }

    static async create(person) {
        return knex('persons').insert(person).returning('*');
    }

    static async update(id, person) {
        return knex('persons').where({ id }).update(person).returning('*');
    }

    static async delete(id) {
        return knex('persons').where({ id }).del();
    }
}

module.exports = Person;

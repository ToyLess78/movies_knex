const knex = require('../knexfile');

class File {
    static async getAll() {
        return knex('files');
    }

    static async getById(id) {
        return knex('files').where({ id }).first();
    }

    static async create(file) {
        return knex('files').insert(file).returning('*');
    }

    static async update(id, file) {
        return knex('files').where({ id }).update(file).returning('*');
    }

    static async delete(id) {
        return knex('files').where({ id }).del();
    }
}

module.exports = File;

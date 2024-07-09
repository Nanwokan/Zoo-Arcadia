const db = require('../config/db');

const Animal = {
    getAll: (callback) => {
        const sql = 'SELECT * FROM animals';
        db.query(sql, callback);
    },
    create: (animal, callback) => {
        const sql = 'INSERT INTO animals SET ?';
        db.query(sql, animal, callback);
    },
    // Other CRUD methods...
};

module.exports = Animal;

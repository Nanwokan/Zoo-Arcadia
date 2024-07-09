const db = require('../config/db');

const Habitat = {
    getAll: (callback) => {
        const sql = 'SELECT * FROM habitats';
        db.query(sql, callback);
    },
    create: (habitat, callback) => {
        const sql = 'INSERT INTO habitats SET ?';
        db.query(sql, habitat, callback);
    },
    // Other CRUD methods...
};

module.exports = Habitat;

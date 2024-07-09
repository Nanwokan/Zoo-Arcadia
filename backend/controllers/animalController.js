const db = require('../config/db');

exports.getAllAnimals = (req, res) => {
    const sql = 'SELECT * FROM animals';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.addAnimal = (req, res) => {
    const newAnimal = req.body;
    const sql = 'INSERT INTO animals SET ?';
    db.query(sql, newAnimal, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

exports.getAnimalById = (req, res) => {
    const sql = 'SELECT * FROM animals WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

exports.updateAnimal = (req, res) => {
    const updatedAnimal = req.body;
    const sql = 'UPDATE animals SET ? WHERE id = ?';
    db.query(sql, [updatedAnimal, req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

exports.deleteAnimal = (req, res) => {
    const sql = 'DELETE FROM animals WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

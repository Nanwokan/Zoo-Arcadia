const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zoo_management'
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

// API endpoints

// Get all habitats
app.get('/habitats', (req, res) => {
    const sql = 'SELECT * FROM habitats';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Add a new habitat
app.post('/habitats', (req, res) => {
    const newHabitat = req.body;
    const sql = 'INSERT INTO habitats SET ?';
    db.query(sql, newHabitat, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Get all animals
app.get('/animals', (req, res) => {
    const sql = 'SELECT * FROM animals';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Add a new animal
app.post('/animals', (req, res) => {
    const newAnimal = req.body;
    const sql = 'INSERT INTO animals SET ?';
    db.query(sql, newAnimal, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Get animal photos by animal id
app.get('/animals/:id/photos', (req, res) => {
    const animalId = req.params.id;
    const sql = 'SELECT * FROM animal_photos WHERE animal_id = ?';
    db.query(sql, [animalId], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Add a new animal photo
app.post('/animals/:id/photos', (req, res) => {
    const newPhoto = { animal_id: req.params.id, photo_path: req.body.photo_path };
    const sql = 'INSERT INTO animal_photos SET ?';
    db.query(sql, newPhoto, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

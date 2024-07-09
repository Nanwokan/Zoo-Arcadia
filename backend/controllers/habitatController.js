const Habitat = require('../models/habitatModel');

exports.getAllHabitats = (req, res) => {
    Habitat.getAll((err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.addHabitat = (req, res) => {
    const newHabitat = req.body;
    Habitat.create(newHabitat, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

// Other CRUD methods...

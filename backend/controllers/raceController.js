const Race = require('../models/Race');

exports.createRace = async (req, res) => {
    try {
        const { label } = req.body;
        const newRace = await Race.create({ label });
        res.status(201).json(newRace);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getRaces = async (req, res) => {
    try {
        const races = await Race.findAll();
        res.status(200).json(races);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const RapportVeterinaire = require('../models/RapportVeterinaire');
const Animal = require('../models/Animal');
const Utilisateur = require('../models/Utilisateur');

exports.createRapport = async (req, res) => {
    try {
        const { date, detail, animal_id, email } = req.body;
        const newRapport = await RapportVeterinaire.create({ date, detail });
        if (animal_id) {
            await newRapport.setAnimals([animal_id]);
        }
        if (email) {
            await newRapport.setUsers([email]);
        }
        res.status(201).json(newRapport);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getRapports = async (req, res) => {
    try {
        const rapports = await RapportVeterinaire.findAll({ include: [Animal, Utilisateur] });
        res.status(200).json(rapports);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateRapport = async (req, res) => {
    try {
        const { id } = req.params;
        const { date, detail, animal_id, email } = req.body;
        const rapport = await RapportVeterinaire.findByPk(id);
        if (!rapport) {
            return res.status(404).json({ message: 'Rapport not found' });
        }
        rapport.date = date;
        rapport.detail = detail;
        if (animal_id) {
            await rapport.setAnimals([animal_id]);
        }
        if (email) {
            await rapport.setUsers([email]);
        }
        await rapport.save();
        res.status(200).json(rapport);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteRapport = async (req, res) => {
    try {
        const { id } = req.params;
        const rapport = await RapportVeterinaire.findByPk(id);
        if (!rapport) {
            return res.status(404).json({ message: 'Rapport not found' });
        }
        await rapport.destroy();
        res.status(200).json({ message: 'Rapport deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

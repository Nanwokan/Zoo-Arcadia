const Habitat = require('../models/Habitat');

exports.createHabitat = async (req, res) => {
    try {
        const newHabitat = await Habitat.create(req.body);
        res.status(201).json(newHabitat);
    } catch (error) {
        console.error('Erreur lors de la création de l\'habitat:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.getHabitats = async (req, res) => {
    try {
        const habitats = await Habitat.findAll();
        console.log('Habitats récupérés:', habitats); // Ajoutez ceci pour inspecter les données récupérées
        res.status(200).json(habitats);
    } catch (error) {
        console.error('Erreur lors de la récupération des habitats:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.updateHabitat = async (req, res) => {
    try {
        const habitat = await Habitat.findByPk(req.params.id);
        if (!habitat) {
            return res.status(404).json({ error: 'Habitat non trouvé' });
        }
        await habitat.update(req.body);
        res.status(200).json(habitat);
    } catch (error) {
        console.error('Erreur lors de la mise à jour de l\'habitat:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.deleteHabitat = async (req, res) => {
    try {
        const habitat = await Habitat.findByPk(req.params.id);
        if (!habitat) {
            return res.status(404).json({ error: 'Habitat non trouvé' });
        }
        await habitat.destroy();
        res.status(204).json({ message: 'Habitat supprimé avec succès' });
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'habitat:', error);
        res.status(500).json({ error: error.message });
    }
};

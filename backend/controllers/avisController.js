const Avis = require('../models/Avis');

exports.createAvis = async (req, res) => {
    try {
        const { pseudo, commentaire, rating } = req.body;
        const newAvis = await Avis.create({ pseudo, commentaire, rating, isVisible: false });
        res.status(201).json(newAvis);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllAvis = async (req, res) => {
    try {
        const avis = await Avis.findAll({
            attributes: ['avis_id', 'pseudo', 'commentaire', 'rating', 'isVisible', 'createdAt']
        });
        res.status(200).json(avis);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.validateAvis = async (req, res) => {
    try {
        const { id } = req.params;
        const avis = await Avis.findByPk(id);
        if (!avis) {
            return res.status(404).json({ message: 'Avis non trouvé' });
        }
        avis.isVisible = true;
        await avis.save();
        res.status(200).json(avis);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteAvis = async (req, res) => {
    try {
        const { id } = req.params;
        const avis = await Avis.findByPk(id);
        if (!avis) {
            return res.status(404).json({ message: 'Avis non trouvé' });
        }
        await avis.destroy();
        res.status(200).json({ message: 'Avis supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const Habitat = require('../models/Habitat');

exports.createHabitat = async (req, res) => {
    try {
<<<<<<< HEAD
        const { nom, description } = req.body;
        const photos = req.files.map(file => file.filename);

        const newHabitat = await Habitat.create({
            nom,
            description,
            photos
        });

        res.status(201).json(newHabitat);
    } catch (error) {
=======
        const newHabitat = await Habitat.create(req.body);
        res.status(201).json(newHabitat);
    } catch (error) {
        console.error('Erreur lors de la création de l\'habitat:', error);
>>>>>>> master
        res.status(500).json({ error: error.message });
    }
};

<<<<<<< HEAD
exports.getAllHabitats = async (req, res) => {
    try {
        const habitats = await Habitat.findAll();
        res.status(200).json(habitats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteHabitat = async (req, res) => {
    try {
        const { id } = req.params;
        const habitat = await Habitat.findByPk(id);
        if (!habitat) {
            return res.status(404).json({ message: 'Habitat non trouvé' });
        }
        await habitat.destroy();
        res.status(200).json({ message: 'Habitat supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateHabitat = async (req, res) => {
    try {
        const { id } = req.params;
        const { nom, description } = req.body;

        const habitat = await Habitat.findByPk(id);
        if (!habitat) {
            return res.status(404).json({ message: 'Habitat non trouvé' });
        }

        habitat.nom = nom || habitat.nom;
        habitat.description = description || habitat.description;
        await habitat.save();

        if (req.files && req.files.length > 0) {
            // Supprimer les anciennes images et leurs associations
            await Comporte.destroy({ where: { habitat_id: id } });

            // Ajouter les nouvelles images et leurs associations
            const imagePromises = req.files.map(file => {
                return Image.create({ 
                    image_data: fs.readFileSync(file.path)
                }).then(image => {
                    return Comporte.create({
                        habitat_id: habitat.habitat_id,
                        image_id: image.image_id
                    });
                });
            });
            await Promise.all(imagePromises);
        }

        res.status(200).json(habitat);
    } catch (error) {
        console.error('Error updating habitat:', error); // Journaliser l'erreur
        res.status(500).json({ error: error.message });
    }
};

exports.getHabitats = async (req, res) => {
    try {
        const habitats = await Habitat.findAll();
        res.status(200).json(habitats);
    } catch (error) {
=======
exports.getHabitats = async (req, res) => {
    try {
        const habitats = await Habitat.findAll();
        console.log('Habitats récupérés:', habitats); // Ajoutez ceci pour inspecter les données récupérées
        res.status(200).json(habitats);
    } catch (error) {
        console.error('Erreur lors de la récupération des habitats:', error);
>>>>>>> master
        res.status(500).json({ error: error.message });
    }
};

<<<<<<< HEAD
=======
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
>>>>>>> master

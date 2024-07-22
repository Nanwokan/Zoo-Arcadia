const Animal = require('../models/Animal');
const Image = require('../models/Image');
const Race = require('../models/Race');
const Habitat = require('../models/Habitat');
const Dispose = require('../models/Dispose');
const Detient = require('../models/Detient');

exports.getAnimals = async (req, res) => {
    try {
        const animals = await Animal.findAll({
            include: [
                { model: Image, as: 'Images' },
                { model: Race, through: Dispose },
                { model: Habitat, through: Detient }
            ]
        });
        res.status(200).json(animals);
    } catch (error) {
        console.error('Erreur lors de la récupération des animaux:', error);
        res.status(500).json({ error: error.message });
    }
};


exports.createAnimal = async (req, res) => {
    try {
        console.log('Tentative de création d\'un nouvel animal');
        const { prenom, etat, habitat_id, race_id } = req.body;
        const newAnimal = await Animal.create({ prenom, etat });

        if (req.files && req.files.length > 0) {
            for (const file of req.files) {
                await Image.create({
                    image_data: file.buffer,
                    animal_id: newAnimal.animal_id
                });
            }
        }

        await Dispose.create({ animal_id: newAnimal.animal_id, race_id });
        await Detient.create({ animal_id: newAnimal.animal_id, habitat_id });

        res.status(201).json(newAnimal);
    } catch (error) {
        console.error('Erreur lors de la création de l\'animal:', error);
        res.status(500).json({ error: error.message });
    }
};


// Mettre à jour un animal
exports.updateAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Animal.update(req.body, {
      where: { animal_id: id }
    });
    if (updated) {
      const updatedAnimal = await Animal.findOne({ where: { animal_id: id } });
      res.status(200).json(updatedAnimal);
    } else {
      throw new Error('Animal non trouvé');
    }
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour de l\'animal.' });
  }
};

const Animal = require('../models/Animal');
const Race = require('../models/Race');
const Habitat = require('../models/Habitat');
const Image = require('../models/Image');

exports.createAnimal = async (req, res) => {
    try {
        const { prenom, habitat_id, race_id, etat } = req.body;
        const animal = await Animal.create({
            prenom,
            habitat_id,
            race_id,
            etat
        });

        const photos = req.files.map(file => ({
            image_data: file.buffer,
            animal_id: animal.animal_id
        }));

        await Image.bulkCreate(photos);

        res.status(201).json(animal);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllAnimals = async (req, res) => {
    try {
        const animals = await Animal.findAll({
            include: [Race, Habitat, Image]
        });
        res.status(200).json(animals);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteAnimal = async (req, res) => {
    try {
        const { id } = req.params;
        const animal = await Animal.findByPk(id);
        if (!animal) {
            return res.status(404).json({ message: 'Animal non trouvé' });
        }
        await animal.destroy();
        res.status(200).json({ message: 'Animal supprimé avec succès' });
    } catch (error) {
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

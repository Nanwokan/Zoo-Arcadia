const Animal = require('../models/Animal');
<<<<<<< HEAD
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
=======
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
>>>>>>> master
        res.status(500).json({ error: error.message });
    }
};

<<<<<<< HEAD
exports.getAllAnimals = async (req, res) => {
    try {
        const animals = await Animal.findAll({
            include: [Race, Habitat, Image]
        });
        res.status(200).json(animals);
    } catch (error) {
=======

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
>>>>>>> master
        res.status(500).json({ error: error.message });
    }
};

<<<<<<< HEAD
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


=======

>>>>>>> master
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

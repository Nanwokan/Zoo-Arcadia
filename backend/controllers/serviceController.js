const { Service } = require('../models');

// Créer un service
exports.createService = async (req, res) => {
  const { nom, description } = req.body;
  try {
    const service = await Service.create({ nom, description });
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtenir tous les services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.findAll();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un service
exports.updateService = async (req, res) => {
  const { service_id } = req.params;
  const { nom, description } = req.body;
  try {
    const service = await Service.findByPk(service_id);
    if (!service) {
      return res.status(404).json({ message: 'Service non trouvé' });
    }
    service.nom = nom;
    service.description = description;
    await service.save();
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un service
exports.deleteService = async (req, res) => {
  const { service_id } = req.params;
  try {
    const service = await Service.findByPk(service_id);
    if (!service) {
      return res.status(404).json({ message: 'Service non trouvé' });
    }
    await service.destroy();
    res.status(204).json({ message: 'Service supprimé' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

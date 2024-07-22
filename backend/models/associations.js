const sequelize = require('../config/db');
const Utilisateur = require('./Utilisateur');
const Role = require('./Role');
const Possede = require('./Possede');
const Animal = require('./Animal');
const Habitat = require('./Habitat');
const CommentaireHabitat = require('./CommentaireHabitat');
const RapportVeterinaire = require('./RapportVeterinaire');
const Race = require('./Race');
const Service = require('./Service');
const Image = require('./Image');
const Avis = require('./Avis');
const Detient = require('./Detient');
const Redige = require('./Redige');
const Obtient = require('./Obtient');
const Dispose = require('./Dispose');
const Comporte = require('./Comporte');

// Relations entre Utilisateur et Role (Possede)
Utilisateur.belongsToMany(Role, { through: Possede, foreignKey: 'email' });
Role.belongsToMany(Utilisateur, { through: Possede, foreignKey: 'role_id' });

// Relations entre Animal et Habitat (Detient)
Animal.belongsToMany(Habitat, { through: Detient, foreignKey: 'animal_id' });
Habitat.belongsToMany(Animal, { through: Detient, foreignKey: 'habitat_id' });

// Relations entre Utilisateur et RapportVeterinaire (Redige)
Utilisateur.belongsToMany(RapportVeterinaire, { through: Redige, foreignKey: 'email' });
RapportVeterinaire.belongsToMany(Utilisateur, { through: Redige, foreignKey: 'rapport_veterinaire_id' });

// Relations entre Animal et RapportVeterinaire (Obtient)
Animal.belongsToMany(RapportVeterinaire, { through: Obtient, foreignKey: 'animal_id' });
RapportVeterinaire.belongsToMany(Animal, { through: Obtient, foreignKey: 'rapport_veterinaire_id' });

// Relations entre Animal et Race (Dispose)
Animal.belongsToMany(Race, { through: Dispose, foreignKey: 'animal_id' });
Race.belongsToMany(Animal, { through: Dispose, foreignKey: 'race_id' });

// Relations entre Habitat et Image (Comporte)
Habitat.belongsToMany(Image, { through: Comporte, foreignKey: 'habitat_id', as: 'HabitatImages' });
Image.belongsToMany(Habitat, { through: Comporte, foreignKey: 'image_id', as: 'ImageHabitats' });

// Relations entre Animal et Image
Animal.hasMany(Image, { foreignKey: 'animal_id', as: 'AnimalImages' });
Image.belongsTo(Animal, { foreignKey: 'animal_id', as: 'ImageAnimal' });

Habitat.hasMany(CommentaireHabitat, { foreignKey: 'habitat_id' });
CommentaireHabitat.belongsTo(Habitat, { foreignKey: 'habitat_id' });

Utilisateur.hasMany(CommentaireHabitat, { foreignKey: 'email' });
CommentaireHabitat.belongsTo(Utilisateur, { foreignKey: 'email' });

module.exports = {
  Utilisateur,
  Role,
  Possede,
  Animal,
  Habitat,
  CommentaireHabitat,
  RapportVeterinaire,
  Race,
  Service,
  Image,
  Avis,
  Detient,
  Redige,
  Obtient,
  Dispose,
  Comporte,
  sequelize
};

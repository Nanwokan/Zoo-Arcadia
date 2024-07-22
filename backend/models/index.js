const Utilisateur = require('./Utilisateur');
const Role = require('./Role');
const Possede = require('./Possede');
const Animal = require('./Animal');
const Habitat = require('./Habitat');
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

// Définir les associations entre les modèles
require('./associations');

module.exports = {
  Utilisateur,
  Role,
  Possede,
  Animal,
  Habitat,
  RapportVeterinaire,
  Race,
  Service,
  Image,
  Avis,
  Detient,
  Redige,
  Obtient,
  Dispose,
  Comporte
};

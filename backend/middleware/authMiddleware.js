const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { Utilisateur, Role } = require('../models');

dotenv.config();

const authenticateToken = (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader) {
    return res.status(401).json({ message: 'Token non fourni' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Format du token invalide' });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token invalide' });
    }

    const utilisateur = await Utilisateur.findOne({
      where: { email: decoded.email },
      include: Role
    });

    if (!utilisateur) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    req.utilisateur = utilisateur;
    next();
  });
};

const authorizeRoles = (roles) => {
  return (req, res, next) => {
    const rolesUtilisateur = req.utilisateur.Roles.map(role => role.label);
    const roleAutorise = roles.some(role => rolesUtilisateur.includes(role));
    if (!roleAutorise) {
      return res.status(403).json({ message: 'Accès refusé' });
    }

    next();
  };
};

module.exports = { authenticateToken, authorizeRoles };

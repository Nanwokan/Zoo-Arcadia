const { Utilisateur, Role, Possede } = require('../models');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

// Configuration du transporteur de mail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

exports.register = async (req, res) => {
  const { email, password, nom, prenom, role_id } = req.body;

  if (!email || !password || !nom || !prenom || !role_id) {
    return res.status(400).json({ message: 'Tous les champs sont obligatoires.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const utilisateur = await Utilisateur.create({ email, password: hashedPassword, nom, prenom });
    await Possede.create({ email, role_id });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Bienvenue au Zoo Arcadia',
      text: `Bienvenue ${prenom},\n\nVotre compte a été créé avec succès.\n\nVotre nom d'utilisateur est : ${email}\n\nMerci,\nL'équipe du Zoo Arcadia`
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Email sent: ' + info.response);
    });

    res.status(201).json(utilisateur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Connexion d'un utilisateur
exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log('Login request received:', { email, password });

  try {
    const utilisateur = await Utilisateur.findOne({
      where: { email },
      include: Role
    });
    if (!utilisateur) {
      console.log('Utilisateur non trouvé');
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    const isPasswordValid = await bcrypt.compare(password, utilisateur.password);
    if (!isPasswordValid) {
      console.log('Mot de passe incorrect');
      return res.status(401).json({ message: 'Mot de passe incorrect' });
    }

    const rolesUtilisateur = utilisateur.Roles.map(role => role.label);
    console.log('Roles utilisateur:', rolesUtilisateur);

    res.status(200).json({
      message: 'Connexion réussie',
      user: {
        email: utilisateur.email,
        roles: rolesUtilisateur
      }
    });
  } catch (error) {
    console.error('Erreur dans le contrôleur login:', error);
    res.status(500).json({ message: error.message });
  }
};

exports.getUserDetails = async (req, res) => {
  const { email } = req.params;
  try {
    const utilisateur = await Utilisateur.findOne({ where: { email }, include: Role });
    if (!utilisateur) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    res.status(200).json(utilisateur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const utilisateurs = await Utilisateur.findAll({ include: Role });
    res.status(200).json(utilisateurs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  const { email } = req.params;
  const { nom, prenom, password, role_id } = req.body;

  try {
    const utilisateur = await Utilisateur.findByPk(email);
    if (!utilisateur) {
      return res.status(404).json({ message: 'Utilisateur non trouvé.' });
    }

    utilisateur.nom = nom;
    utilisateur.prenom = prenom;

    if (password) {
      utilisateur.password = await bcrypt.hash(password, 10);
    }

    await utilisateur.save();

    await Possede.destroy({ where: { email } });
    await Possede.create({ email, role_id });

    res.json(utilisateur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

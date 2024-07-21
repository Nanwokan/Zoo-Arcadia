const { Role } = require('../models');
const { Op } = require('sequelize');

exports.getRoles = async (req, res) => {
    try {
        const roles = await Role.findAll({
            where: {
                label: {
                    [Op.ne]: 'administrateur' // Exclure le rôle administrateur
                }
            }
        });
        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

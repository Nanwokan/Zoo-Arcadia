const { CommentaireHabitat, Habitat } = require('../models');

exports.createComment = async (req, res) => {
    try {
        const { habitat_id, commentaire } = req.body;
        const newComment = await CommentaireHabitat.create({
            habitat_id,
            commentaire,
            date: new Date()
        });
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getComments = async (req, res) => {
    try {
        const comments = await CommentaireHabitat.findAll({
            include: [{ model: Habitat, attributes: ['nom'] }]
        });
        const formattedComments = comments.map(comment => ({
            date: comment.date,
            habitat_nom: comment.Habitat.nom,
            commentaire: comment.commentaire
        }));
        res.status(200).json(formattedComments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

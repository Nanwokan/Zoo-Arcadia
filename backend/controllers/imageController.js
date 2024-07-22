const Image = require('../models/Image');

exports.uploadImage = async (req, res) => {
    try {
        const image_data = req.file.buffer;
        const { habitat_id } = req.body;
        const newImage = await Image.create({ image_data, habitat_id });
        res.status(201).json(newImage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getImages = async (req, res) => {
    try {
        const images = await Image.findAll();
        res.status(200).json(images);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteImage = async (req, res) => {
    try {
        const { id } = req.params;
        const image = await Image.findByPk(id);
        if (!image) {
            return res.status(404).json({ message: 'Image not found' });
        }
        await image.destroy();
        res.status(200).json({ message: 'Image deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

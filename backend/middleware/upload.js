const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
<<<<<<< HEAD
        cb(null, 'uploads/'); // Assurez-vous que ce dossier existe ou qu'il est créé automatiquement
=======
        cb(null, 'uploads/'); // Assurez-vous que ce dossier existe
>>>>>>> master
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Nom de fichier unique
    }
});

const upload = multer({ storage: storage });

module.exports = upload;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');  // Assurez-vous que le fichier db.js est bien importé

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const animalRoutes = require('./routes/animalRoutes');
const habitatRoutes = require('./routes/habitatRoutes');

app.use('/animals', animalRoutes);
app.use('/habitats', habitatRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

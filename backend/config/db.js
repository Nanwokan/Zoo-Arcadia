const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'nanwokan',
    password: 'moyahouattara',
    database: 'zoo_management'
});

db.connect(err => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err);
        return;
    }
    console.log('MySQL connected...');
});

module.exports = db;

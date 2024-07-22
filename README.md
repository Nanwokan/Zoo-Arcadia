# Zoo Management Application

## Description
Cette application web permet de gérer les différentes sections du zoo, incluant la gestion des animaux, des habitats, des services, et plus encore. Elle est conçue pour faciliter l'administration du zoo et offrir une expérience interactive aux visiteurs.

## Fonctionnalités
- Affichage des animaux et de leurs états de santé (inachevé)
- Gestion des habitats
- Gestion des services offerts par le zoo
- Espace administrateur pour la gestion complète du zoo
- Espace employé pour la validation des avis et gestion des services
- Espace vétérinaire pour les comptes rendus de santé des animaux (inachevé)
- Possibilité pour les visiteurs de laisser des avis

## Installation
Pour installer et exécuter cette application localement, suivez ces étapes :

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/Nanwokan/Zoo-Arcadia.git

2. Accédez au répertoire du projet :

cd Zoo-Arcadia

3. Installez les dépendances :

npm install

## Configuration
Créez un fichier .env à la racine du projet avec les configurations nécessaires.

DB_HOST=localhost
DB_USER=nanwokan
DB_PASSWORD=MoyahOuattara2003.
DB_NAME=zoo_arcadia
PORT=2004
EMAIL_USER= mail du zoo (gmail)
EMAIL_PASS=mot de passe (gmail)

## Utilisation
Pour démarrer l'application une fois dans le repertoire "Zoo-Arcadia", utilisez la commande suivante :

npm start

Si votre package.json est configuré correctement, cela exécutera le script de démarrage défini. Si vous n'avez pas de script de démarrage, vous pouvez démarrer l'application directement en utilisant Node.js :

node backend/index.js

Vérifier la structure de votre projet
Assurez-vous que votre projet est structuré correctement.

Zoo-Arcadia/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── animalController.js
│   │   ├── habitatController.js
│   │   ├── imageController.js
│   │   ├── raceController.js
│   │   ├── ...
│   │   ├── userController.js
│   ├── middleware/
│   │   └── upload.js
│   ├── models/
│   │   ├── Animal.js
│   │   ├── Habitat.js
│   │   ├── Image.js
│   │   ├── Race.js
│   │   ├── User.js
│   │   ├── ...
│   │   └── associations.js
│   ├── routes/
│   │   ├── animalRoutes.js
│   │   ├── habitatRoutes.js
│   │   ├── imageRoutes.js
│   │   ├── raceRoutes.js
│   │   ├── .....
│   │   └── userRoutes.js
│   └── index.js
│
├── frontend/
│   ├── css/
│   ├── js/
│   ├── pages/
│   └── index.html
│
├── .env
├── package.json
└── package-lock.json

## Technologies utilisées

Node.js
Express
MySQL (ou une autre base de données relationnelle)
HTML5, CSS3, JavaScript pour le frontend
Git, GitHub pour le contrôle de version
ClickUp pour la gestion de projet

## Contributeurs
Nanwokan Ouattara

## Liens utiles
Dépôt GitHub : https://github.com/Nanwokan/Zoo-Arcadia
Application Déployée : [(https://zoo-arcadia-fgafzczp8-nanwokans-projects.vercel.app)](https://zoo-arcadia-2hj34516a-nanwokans-projects.vercel.app/)
Gestion de Projet : [ClickUp](https://app.clickup.com/9015082414/v/s/90152702178)
figma pour les maquettes: https://www.figma.com/design/VOipVjE67nAIbGmFt7TilU/ECF-ARCADIA?node-id=0-1&t=itCEUVxAHzYkpyHi-0

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const sequelize = require('./config/db'); // Importez sequelize directement depuis config/db

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2004;

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.use('/api', routes);

sequelize.sync()
  .then(() => {
    console.log('Database connected and synchronized');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

const express = require('express');
const app = express();

const dbConnection = require('./src/config/db.js');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

//Manejar solicitudes JSON y URLs
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Función para manrjar la ruta raíz
app.get('/', (req, res) => {
  res.send('<h1>Hola mundo test</h1>');
});

//Conexión a la base de datos
dbConnection();

//Iniciar server
app.listen(PORT, () => {
  console.log(`Express está escuchando en el puerto http://localhost:${PORT}`);
});

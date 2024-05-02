const express = require('express');
const cors = require('cors');
const app = express();
const { addSong, getSongs, deleteSong, updateSong, getSongById } = require('./src/models/video.js'); // Asegúrate de que la ruta sea correcta

const dbConnection = require('./src/config/db.js');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(cors());
//Manejar solicitudes JSON y URLs
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "*"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader("Access-Control-Max-Age", 7200);

  next();
});


//Función para manrjar la ruta raíz
app.get('/', (req, res) => {
  res.send('test');
});

// Define the POST /songs route
app.post('/songs', async (req, res) => {
  try {
    await addSong(req.body.title, req.body.link, req.body.artistName, req.body.genre, req.body.year);
    res.status(200).send({ message: 'Song added successfully' });
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while adding the song' });
  }
});

// Define the GET /songs route
app.get('/songs', async (req, res) => {
  try {
    const songs = await getSongs();
    res.status(200).send(songs);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while getting the songs' });
  }
});

// Define the DELETE /songs/:id route
app.delete('/songs/:id', async (req, res) => {
  try {
    await deleteSong(req.params.id);
    res.status(200).send({ message: 'Song deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while deleting the song' });
    console.log(error);
  }
});

// Define the PUT /songs/:id route
app.put('/songs/:id', async (req, res) => {
  try {
    await updateSong(req.params.id, req.body.title, req.body.link, req.body.artistName, req.body.genre, req.body.year);
    res.status(200).send({ message: 'Song updated successfully' });
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while updating the song' });
  }
});

// Define the GET /songs/:id route
app.get('/songs/:id', async (req, res) => {
  try {
    const song = await getSongById(req.params.id);
    res.status(200).send(song);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while getting the song' });
  }
});



//Conexión a la base de datos
dbConnection();

//Iniciar server
app.listen(PORT, () => {
  console.log(`Express está escuchando en el puerto http://localhost:${PORT}`);
});
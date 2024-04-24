//require('dotenv').config({ path: '../.env' });
//const dotenv = require('dotenv')
const mongoose = require('mongoose');

const dbConnection = async () => {
  try {

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Conexión a la base de datos de MongoDB establecida.');

  } catch (error) {

    console.error('Error al conectar con la base de datos:', error.message);
    process.exit(1);
    
  }
}

module.exports = dbConnection;
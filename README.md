# BIBLIOTECA MUSICAL (BACK)

En este ReadMe se resumirá el proceso de desarrollo enfocándonos en el backend del proyect break final, además de los recursos empleados.
Será acompañado de las explicaciones pertinentes en cada caso.


## Índice

1. Estructura de archivos
2. Detalles de los archivos
3. Tecnologías empleadas
4. Creación y conexión con la base de datos
5. Creación del modelo
6. Despliegue
7. Enlaces (Incluye el despliegue del frontend)


## Estructura de archivos

```
.
├── src
│   ├── config
│   │   └── db.js
│   │
│   └── models
│       └── video.js
│
├── .env
├── .gitignore
└── index.js

```

## Detalles de los archivos

- `src/cofig/db.js`: Archivo que maneja la lógica para conwctar con la base de datos en MongoDB usando moongose a través de la URI localizada en el archivo `.env`
- `src/models/video.js`: Modelo de moongose para manejar las solicitudes a la base de datos, tales como addSong, getSongs, deleteSong, updateSong y getSongById.
- `.env`: Documento donde se archivan las variables de entorno, en este caso PORT y MONGO_URI.
- `index.js`: Archivo principal que es manejado a través de Node.js. Además de ser el responsable de levantar el servidor, contiene otras funciones, como importar express, cors, dotenv para poder leer el contenido de `.env`, y las funciones `db.js` y `video.js`. También define las rutas para los POSTs o los GETs.


## Tecnologías empleadas

- **Node.js**: La base para estructurar el backend del proyecto. Es el entorno en el que se ejecuta la aplicación.

- **Express.js**: Se utiliza como la base para la construcción de la aplicación; definir rutas, middlewares, iniciar el servidor, etc.

- **Mongoose**: Se utiliza para conectar la aplicación a la base de datos MongoDB.

- **MongoBD**: Base de datos donse se guardan los datos de las canciones.

- **Dotenv**: Se utiliza para cargar las variables de entorno del archivo .env.

- **CORS**: Se utiliza para permitir diferentes solicitudes.

- **CSS**: Empleado para dar estilos a la página y gestionar la interacción (botones, flexbox, efectos hover, etc.)

- **HTML**: Empleado para crear la estructura general a través de literl templates.


## Creación de la estructura y conexión con la base de datos

Me basé en el último proyect break para crear el backend del proyecto. Lo primero que hice fue crear las variables de entorno para reutilizar la base de datos de MongoDB.

A partir de ahí, traté de crear una estructura compacta con lo necesario para poder poner en funcionamiento la aplicación a través de un servidor, por lo que instalé todas las dependencias necesarias que sabía que iba a necesitar para trabajar y levanté un servidor para comenzar a hacer pruebas con la base de datos.

Lógicamente, lo siguiente que creé fue `db.js` para establecer la conexión. Tras ver que funcionaba, salté al manejo de las solicitudes.


## Creación del modelo

Ya en `video.js`, importé mongoose para crear un modelo donde poder manejar cada canción con los esquemas que ofrece la dependencia. Una vez creado el modelo, le pasé los contenidos de cada canción para poder trabajar con ellos, como el nombre o la URL.
A partir de ahí comencé a escribir las solicitudes que serían utilizadas más adelante.


## Despliegue

El proyecto está subido y ha sido desplegado en render.com. Este recoge la información almacenada en MongoBD para que pueda ser utilizada en el frontend.


## Enlaces

URL proyecto > https://back-final-jmc.onrender.com/

Render deploy > https://dashboard.render.com/web/srv-copq6tsf7o1s73e50cn0

Netlify deploy > https://app.netlify.com/sites/front-final-jmc/overview
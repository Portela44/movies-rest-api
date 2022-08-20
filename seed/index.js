require('dotenv').config();
const mongoose = require('mongoose');
const Movie = require("../models/Movie");

const movies = [
  {
    title: "Avengers: Infinity War",
    year: 2018,
    director: "Joe Russo, Anthony Russo",
    duration: 156,
    synopsis: "El todopoderoso Thanos ha despertado con la promesa de arrasar con todo a su paso, portando el Guantelete del Infinito, que le confiere un poder incalculable. Los únicos capaces de pararle los pies son los Vengadores y el resto de superhéroes de la galaxia, que deberán estar dispuestos a sacrificarlo todo por un bien mayor. Capitán América e Ironman deberán limar sus diferencias, Black Panther apoyará con sus tropas desde Wakanda, Thor y los Guardianes de la Galaxia e incluso Spider-Man se unirán antes de que los planes de devastación y ruina pongan fin al universo. ¿Serán capaces de frenar el avance del titán del caos?",
    image: "https://m.media-amazon.com/images/I/71UHg51kgKL._AC_SY679_.jpg"
  },
  {
    title: "Avengers: Endgame",
    year: 2019,
    director: "Joe Russo, Anthony Russo",
    duration: 181,
    synopsis: "Después de los eventos devastadores de 'Avengers: Infinity War', el universo está en ruinas debido a las acciones de Thanos, el Titán Loco. Con la ayuda de los aliados que quedaron, los Vengadores deberán reunirse una vez más para intentar deshacer sus acciones y restaurar el orden en el universo de una vez por todas, sin importar cuáles son las consecuencias... Cuarta y última entrega de la saga 'Vengadores'",
    image: "https://m.media-amazon.com/images/I/7103d-g1quL._AC_SY741_.jpg"
  }
]

mongoose.connect(process.env.MONGO_URL)
  .then(x => console.log(`Connected to ${x.connection.name}`))
  .then(() => {
    return Movie.create(movies);
  })
  .then(() => {
    console.log('Seed done 🌱');
  })
  .catch(e => console.log(e))
  .finally(() => {
    console.log('Closing connection');
    mongoose.connection.close();
  })
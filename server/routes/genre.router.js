const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  // this query is using many to many method to display the movieid, movie title, and  name of the genre all of the movies belong to.
  const SQLTEXT= `SELECT movie_id, title, name FROM movies_genres
  JOIN "movies" ON movies.id = movies_genres.movie_id
  JOIN "genres" ON genres.id = movies_genres.genre_id;`;
  pool.query(SQLTEXT)
  .then( result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR: Get all movies', err);
    res.sendStatus(500)
  })

});



module.exports = router;
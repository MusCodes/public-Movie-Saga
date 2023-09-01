import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./MovieList.css";

function MovieList() {
  const history = useHistory();
  // we are dispatching our fetchmovies and get genre sagas here,than were mapping over our movie which we are getting from the store,
  // than we are accessing the array of objects property by, which in this case is the id,title, and the poster image.
  // our handlesubmit function pushes us to the detail page, there isn't an actual button because the onClick handle is on the actual image.

  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  function handleSubmit(movieID) {
    // handleSubmit has a param which we will pass the movie.id as an arguement to it, the history.push will bring us to the detail page
    // while also passsing the movie.id as a param for us to access.
    history.push(`/details/${movieID}`);
    console.log("XXXXXX", movieID);
  }

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
    dispatch({ type: `GET_GENRE` });
  }, []);

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <img
                onClick={() => handleSubmit(movie.id)}
                src={movie.poster}
                alt={movie.title}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;

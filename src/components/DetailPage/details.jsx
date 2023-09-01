import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

function Details() {
  const history = useHistory();
  const dispatch = useDispatch();
  let params = useParams();

  // were using params here to grab the id of the movie poster we clicked on from the url. and were setting it to movieID.
  // there is a lot of console logs here but its good practice, it helped me find where my code was stopping at.
  console.log("this is params!", params);
  let movieID = params.id;
  // were grabbing all of our movies from the store.
  const movies = useSelector((store) => store.movies);
  console.log("THIS IS MOVIES!", movies);
  // grabbing all of our genres from the redux store.
  const genres = useSelector((store) => store.genres);
  console.log("XXXXX Genre", genres);
  console.log("THIS IS MOVIE ID!!!!!!!!!!!!!!", movieID);
  // were using find and filter method to make sure the id matches on both ends.

  let movie = movies.find((moviez) => moviez.id === Number(movieID));

  let genre = genres.filter((genre) => genre.movie_id === Number(movieID));
  console.log("THIS IS MOVIE", movie);
  // this function will be linked to the button which will bring us back to our movie poster page.
  function handlesubmit() {
    history.push("/");
  }
  useEffect(() => {
    // were dispatching this to our redux store, it is essentially a singal to our redux store that something has changed.
    dispatch({ type: `GET_GENRE` });
  }, []);
  //below, we are accessing our object properties and appending the data we want to see, in this example its the movie poster,title,and descrption.
  // we are mapping over our genre which is just another way to loop over something, and than we are appending the name property which is the genres a movie belongs to.
  // Back to Movie List button has the onclick function of handle submit which we set earlier, and all it does it brings us back to the movie poster page.
  return (
    <>
      <div className="details">
        <img className="poster" src={movie.poster} />
        <section className="title">
          {" "}
          <h1>{movie.title}</h1>
          <h2>Genre:</h2>
          {genre.map((x) => (
            <p key={x.id}>{x.name}</p>
          ))}
          <p>{movie.description}</p>
          <button onClick={handlesubmit}>Back to Movie List</button>
        </section>
      </div>
    </>
  );
}

export default Details;

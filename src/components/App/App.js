import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import { NavLink, useHistory } from "react-router-dom";
import Details from "../DetailPage/details";

function App() {
  return (
    // we have two routes here, first one will show our movieList component and the other one path
    // is set to the details page with param that takes in the id, that path will link us to the detail component.
    <div className="App">
      <h1>The Movies Saga!</h1>
    
      <Router>
        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>
      </Router>
    </div>
  );
}

export default App;

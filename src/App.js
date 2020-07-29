import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/custom.scss';
import SearchPage from './SearchPage';
import MovieDetail from './MovieDetail';
import {Router} from "@reach/router";

function App () {

  return (
    <Router>
      <SearchPage path = "/movie-app" default/>
      <MovieDetail path = "/detail-page/:movieId" />
    </Router>
  )
}

export default App;
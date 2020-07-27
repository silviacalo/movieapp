import React, {useState, useEffect} from 'react';
import Header from './Header';
import {useParams} from "@reach/router"

function MovieDetail() {
  const [link] = useState("/movie-app");
  const [movie, setMovie] = useState("");
  const [loading, setLoading] = useState(true); 

  const par = useParams();
  let id = par.movieId;

  //chiama servizio
  useEffect(() => {
    let url = 'http://www.omdbapi.com/?apikey=4a3b711b&i=' + id;
    fetch(url)
    .then(response => response.json())
    .then(data => setMovie(data))
    .then(() => setLoading(false))
    .catch((error)=> console.log(error));
  }, [id]);

  let seasons = movie !== null && movie.totalSeasons &&
    <div className = "movie__detail">
      <span>Total Seasons: </span>
      {movie.totalSeasons}
    </div>;

  let moviePage = "";

  if(!loading) {
    moviePage = movie !== null && movie.Response !== "False" ?
      <div className = "movie">
        <div className ="d-md-flex">
          <div>
            <img src={movie.Poster} alt= {movie.Title} className = "movie__img"/>
          </div>
          <div className = "ml-md-5">
            <h3 className = "movie__title">
              {movie.Title}
            </h3>
            <div className = "movie__detail">
              <span>Year: </span>
              {movie.Year}
            </div>
            <div className = "movie__detail">
              <span>Runtime: </span>
              {movie.Runtime}
            </div>
            <div className = "movie__detail">
              <span>Genre: </span>
              {movie.Genre}
            </div>
            <div className = "movie__detail">
              <span>Director: </span>
              {movie.Director}
            </div>
            <div className = "movie__detail">
              <span>Actors: </span>
              {movie.Actors}
            </div>
            <div className = "movie__detail">
              <span>Language: </span>
              {movie.Language}
            </div>
            <div className = "movie__detail">
              <span>Country: </span>
              {movie.Country}
            </div>
            <div className = "movie__detail">
              <span>Awards: </span>
              {movie.Awards}
            </div>
            {seasons}
            <p className = "movie__plot">
              {movie.Plot}
            </p>
          </div>
        </div>
      </div> :
    <div className = "movie">
      Incorrect IMDb ID.
    </div>;
  }

  return (
    <div>
      <Header link = {link}/>
      <div className = "container">
        <div className = "row">
          <div className = "col-12">
            {moviePage}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;

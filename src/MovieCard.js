import React from 'react';

function MovieCard(props) {

  let movies = props.movies;

  let list = movies === undefined ? "" : movies.map((element) => 
    <div className="col-6 col-md-4">
      <div className="movie-card">
        <img src={element.Poster} alt= {element.Title} className = "movie-card__img"/>
        <div className="movie-card__wrapper">
          <div className="movie-card__detail">
            <span>Title: </span>
            {element.Title}
          </div>
          <div className="movie-card__detail">
            <span>Year: </span>
            {element.Year}
          </div>
          <div className="movie-card__detail">
            <span>Type: </span>
            {element.Type}
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <div className="col-12 col-md-10">
      <div className="row">
        {list}
      </div>
    </div>
  );
}

export default MovieCard;

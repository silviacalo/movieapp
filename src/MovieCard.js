import React from 'react';
import {Link} from "@reach/router";

function MovieCard({movies, keyWord, tags, activePage}) {
  let list = movies === undefined ? "" : movies.map((element) => {
    let linkUrl = "/detail-page/" + element.imdbID;
    return (
      <div className="col-12 col-lg-4" key = {element.imdbID}>
        <div className="movie-card">
          <Link to = {linkUrl} state = {{keyWord, tags, activePage}}>
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
          </Link> 
        </div>
      </div>
    )
  }
  
  )
  return (
    <div className="col-12 col-lg-10">
      <div className="row">
        {list}
      </div>
    </div>
  );
}

export default MovieCard;

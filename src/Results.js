import React from 'react';
import times from './times.svg';

function Results(props) {
  const numberOfResults = props.totalResults === undefined ? 0 : props.totalResults;
  const tagType = props.activeFilters.type === undefined || props.activeFilters.type === "" ? null : 
    <button onClick = {props.onclicktype} type = "button" className="ml-auto results__btn">
      <img src={times} alt="logo" className="results__icon"/>
      {props.activeFilters.type}
    </button>
  const tagYear = props.activeFilters.year === undefined || props.activeFilters.year === "" ? null : 
  <button onClick = {props.onclickyear} type = "button" className="results__btn">
    <img src={times} alt="logo" className="results__icon"/>
    {props.activeFilters.year}
  </button>
  const results = props.totalResults === null ? "" : 
  <div className ="results">
    <div className = "d-flex">
      <div>
        We have found
          <span className ="results__number"> {numberOfResults} </span>
        results
      </div>
      <div className="ml-auto">
        {tagType}
        {tagYear}
      </div>
    </div>
  </div>
  return (
    <div>
      {results}
    </div>
  );
}

export default Results;

import React from 'react';
import times from './times.svg';

function Results({totalResults,activeFilters,onclick, keyWord}) {
  const numberOfResults = totalResults === undefined ? 0 : totalResults;
  const tagType = activeFilters.type === undefined || activeFilters.type === "" ? null : 
    <button onClick = {()=>{onclick("type")}} type = "button" className="ml-auto results__btn">
      <img src={times} alt="logo" className="results__icon"/>
      {activeFilters.type}
    </button>
  const tagYear = activeFilters.year === undefined || activeFilters.year === "" ? null : 
  <button onClick = {()=>{onclick("year")}} type = "button" className="results__btn">
    <img src={times} alt="logo" className="results__icon"/>
    {activeFilters.year}
  </button>
  const results = totalResults === null ? "" : 
  <div className ="results">
    <div className = "d-flex">
      <div>
        We have found
        <span className ="results__number"> {numberOfResults} </span>
        results for 
        <strong> "{keyWord}"</strong>
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

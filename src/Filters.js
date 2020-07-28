import React from 'react';

function Filters({totalResults,handleSubmit,handleChange,filter}) {
  const filters = totalResults === null ? null : 
  <form onSubmit={handleSubmit} className = "filters">
    <label className = "filters__label">
      Type:
      <select name = "type" value = {filter.type} className = "filters__select" onChange={handleChange} >
        <option value="" className="d-none"></option>
        <option value="Movie">movie</option>
        <option value="Series">series</option>
        <option value="Episode">episode</option>
      </select>
    </label>
    <label className="filters__label">
      Year:
      <input name = "year" type="number" min="1900" max="2020" value = {filter.year} className="filters__input" onChange={handleChange} />
    </label>
    <input type="submit" value="Submit" />
  </form>
  return (
    <div>{filters}</div>
  );
}

export default Filters;

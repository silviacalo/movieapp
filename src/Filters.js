import React from 'react';

function Filters(props) {
  const filters = props.totalResults === null ? null : 
  <form onSubmit={props.handleSubmit} onChange={props.handleChange} className = "filters">
    <label className = "filters__label">
      Type:
      <select name = "type" value = {props.filters.type} className = "filters__select">
        <option value="" className="d-none"></option>
        <option value="Movie">movie</option>
        <option value="Series">series</option>
        <option value="Episode">episode</option>
      </select>
    </label>
    <label className="filters__label">
      Year:
      <input name = "year" type="number" min="1900" max="2020" value = {props.filters.year} className="filters__input"/>
    </label>
    <input type="submit" value="Submit" />
  </form>
  return (
    <div>{filters}</div>
  );
}

export default Filters;

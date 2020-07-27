import React from 'react';
import search from './search.svg';

function SearchForm({submit,change,text}) {
  return (
    <form onSubmit = {submit} className = "form-search">
      <input type="text" placeholder="Search a movie!" required="required" value = {text} onChange= {change}  />
      <button type="submit" value="Submit" className="form-search__btn">
        <img src={search} alt="logo" className="form-search__icon"/>
      </button>
    </form>
  );
}

export default SearchForm;

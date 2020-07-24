import React from 'react';
import search from './search.svg';

function SearchForm({submit,change,text}) {
  return (
    <form onSubmit = {submit} onChange= {change} className = "form-search">
      <input type="text" placeholder="Search a movie!" required="required" value = {text}/>
      <button type="submit" value="Submit" className="form-search__btn">
        <img src={search} alt="logo" className="form-search__icon"/>
      </button>
    </form>
  );
}

export default SearchForm;

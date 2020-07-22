import React from 'react';
import search from './search.svg';

function SearchForm(props) {
  return (
    <form onSubmit = {props.submit} onChange= {props.change} className = "form-search">
      <input type="text" placeholder="Search a movie!" required="required" value = {props.text}/>
      <button type="submit" value="Submit" className="form-search__btn">
        <img src={search} alt="logo" className="form-search__icon"/>
      </button>
    </form>
  );
}

export default SearchForm;

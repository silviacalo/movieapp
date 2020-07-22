import React, {useState, useEffect} from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import Filters from './Filters';
import Results from './Results';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [keyInput, setKeyInput] = useState("");
  const [key, setKey] = useState("");
  const [totalResults, setTotalResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({
    type: "",
    year: ""
  });
  const [tags, setTags] = useState({
    type: "",
    year: ""
  });
  const [pagination, setPagination] = useState([]);
  const [activePage, setActivePage] = useState(1);

  //chiama servizio
  useEffect(() => {
    let url = 'http://www.omdbapi.com/?apikey=4a3b711b&s=' + key + '&page=' + activePage + '&type=' + tags.type + '&y=' + tags.year;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setMovieList(data.Search);
      if(loading) {
        setTotalResults(data.totalResults);
        createPagination(data.totalResults);
      }
    })
    .catch((error)=>{console.log(error)});
    setLoading(false);
  }, [key, activePage,tags.type, tags.year, loading]);

  const handleChange = (event) => {
    setKeyInput(event.target.value);
  }

  //mostra i risultati al submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setKey(keyInput);
    setLoading(true);
  }

  const createPagination = (total) => {
    // setting pagination array (based on number of results)
    let arrayPagination = [];
    for(let i=1; i < Math.ceil(total / 10) +1; i++) {
      arrayPagination.push(i);
    }
    let myArray = arrayPagination.slice(activePage, activePage+3);
    console.log(myArray);
    setPagination(arrayPagination);
  }

  //mostra i risultati quando cambio pagina dalla paginazione
  const changePage = (i) => {
    setActivePage(i);
  }

  //gestisce il change dei filtri
  const filtersChange = (event) => {
    setFilter({
      ...filter,
      [event.target.name] : event.target.value,
    });
  }

  //gestisce il submit dei filtri
  const filtersSubmit = (event) => {
    event.preventDefault();
    setTags({
      type: filter.type,
      year: filter.year
    });
    console.log(tags.type);
    setActivePage(1);
    setLoading(true);
  }

  //cancella i filtri tipo
  const removeFilterType = () => {
    setTags({
      type: undefined,
      year: tags.year
    });
    setActivePage(1);
    setLoading(true);
  }

  //cancella i filtri anno
  const removeFilterYear = () => {
    setTags({
      type: tags.type,
      year: undefined
    });
    setActivePage(1);
    setLoading(true);
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-around">
              <SearchForm text = {keyInput} change = {handleChange} submit = {handleSubmit}/>
            </div>
          </div>
        </div>
        <Results totalResults = {totalResults} activeFilters = {tags} onclicktype = {removeFilterType} onclickyear = {removeFilterYear}/>
        <div className="row">
            <div className="col-12 col-md-2">
              <Filters totalResults = {totalResults} filters = {filter} handleSubmit = {filtersSubmit} handleChange = {filtersChange}/>
            </div>
            <MovieCard movies = {movieList} />
        </div>
        <Pagination pagination = {pagination} activePage = {activePage} click = {changePage}/>
      </div>
    </div>
  );
}

export default App;

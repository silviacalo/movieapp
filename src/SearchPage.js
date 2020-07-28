import React, {useState, useEffect, useCallback} from 'react';
import SearchForm from './SearchForm';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import Filters from './Filters';
import Results from './Results';
import Header from './Header';
import Loading from './Loading';

function SearchPage({location}) {
  const [movieList, setMovieList] = useState([]);
  const [keyInput, setKeyInput] = useState("");
  const [key, setKey] = useState((location.state && location.state.keyword) || "");
  const [totalResults, setTotalResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({
    type: "",
    year: ""
  });
  const [tags, setTags] = useState({
    type: ((location.state && location.state.tags.type) || ""),
    year: ((location.state && location.state.tags.year) || "")
  });
  const [pagination, setPagination] = useState([]);
  const [activePage, setActivePage] = useState((location.state && location.state.activePage) || 1);

  //logica della paginazione
  const createPagination = useCallback((total) => {

    let totalPages = Math.ceil(total / 10);

    let myArray = [activePage - 2, activePage -1, activePage, activePage + 1, activePage + 2];

    //aggiungo elementi precedenti
    if (activePage === 4) {
      myArray.unshift(1);
    } else if (activePage > 4) {
      myArray.unshift(1, ". . .");
    }

    //aggiungo elementi successivi
    if (totalPages - activePage === 3) {
      myArray.push(totalPages);
    } else if (totalPages - activePage > 3) {
      myArray.push(". . .", totalPages);
    }

    //elimino gli elementi coda e inizio
    myArray = myArray.filter(element => {
      return ( typeof(element) === "string" ||  (element > 0 && element <= totalPages))
    });
    setPagination(myArray);
  }, [activePage]);

  //chiama servizio
  useEffect(() => {
    if(key) {
      setLoading(true);
      let url = 'http://www.omdbapi.com/?apikey=4a3b711b&s=' + key + '&page=' + activePage + '&type=' + tags.type + '&y=' + tags.year;
      fetch(url)
      .then(response => response.json())
      .then(data => {
        setMovieList(data.Search);
        setTotalResults(data.totalResults);
        createPagination(data.totalResults);
        setLoading(false);
      })
      .catch((error)=>{
        console.log(error);
        setLoading(false);
      });
    }
  }, [key, activePage,tags.type, tags.year, createPagination]);

  const handleChange = (event) => {
    setKeyInput(event.target.value);
  }

  //mostra i risultati al submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setKey(keyInput);
    setFilter({
      type: "",
      year: ""
    })
    setTags({
      type: "",
      year: ""
    })
    setActivePage(1);
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
    setFilter({
      type: "",
      year: ""
    });
    setTags({
      type: filter.type,
      year: filter.year
    });
    setActivePage(1);
  }

  //cancella i filtri
  const removeFilter = (category) => {
    if(category === "type") {
      setTags({
        ...tags,
        type: "",
      });
      setFilter({
        ...filter,
        type: "",
      })
    } else {
      setTags({
        ...tags,
        year: "",
      });
      setFilter({
        ...filter,
        year: "",
      })
    }
    setActivePage(1);
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-around">
              <SearchForm text = {keyInput} change = {handleChange} submit = {handleSubmit} />
            </div>
          </div>
        </div>
        {loading ? (
          <Loading />
        ):(
          <>
            <Results totalResults = {totalResults} activeFilters = {tags} onclick = {removeFilter} keyWord = {key} />
            <div className="row">
                <div className="col-12 col-lg-2">
                  <Filters totalResults = {totalResults} filter = {filter} handleSubmit = {filtersSubmit} handleChange = {filtersChange} />
                </div>
                <MovieCard movies = {movieList} keyWord = {key} tags = {tags} activePage = {activePage} />
            </div>
            <Pagination pagination = {pagination} activePage = {activePage} results = {totalResults} click = {changePage} />
          </>
        )}
      </div>
    </div>
  );
}

export default SearchPage;

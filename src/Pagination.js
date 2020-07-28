import React from 'react';

function Pagination({pagination, click, activePage, results}) {
  let array = pagination;
  let paginationList = array.map((el,index) => {
    if (typeof(el) === "string") {
      return(
        <li className="pagination__dots" key = {index}>
          {el}
        </li>
      )
    } else {
      return(
        <li className = "pagination__item" key = {index}>
          <button onClick = {()=>click(el)} className= {activePage === el ? "pagination__btn active" : "pagination__btn"}>
            {el}
          </button>
        </li>
      )
    }
    }
  );

  let totalPages = Math.ceil(results / 10);
  let prevArrow = activePage !== 1 && totalPages > 1 && (
    <li>
      <button className="pagination__arrow pagination__arrow--prev" onClick = {() => click(activePage -1)}> &#60; </button>
    </li>
  );
  let nextArrow = activePage !== totalPages && totalPages > 1 && (
    <li>
      <button className="pagination__arrow" onClick = {() => click(activePage  + 1)}> &#62; </button>
    </li>
  );
  
  return (
    <div className="pagination">
      {prevArrow}
      {paginationList}
      {nextArrow}
    </div>
  );
}

export default Pagination;

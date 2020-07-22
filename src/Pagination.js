import React from 'react';

function Pagination(props) {
  let array = props.pagination;
  let paginationList = array.map((el,index) =>
    (
      <li>
        <button onClick = {()=>props.click(index+1)} className= {index+1 === props.activePage? "pagination__btn active": "pagination__btn"}>
          {el}
        </button>
      </li>
    )
  );
  return (
    <div className="pagination">{paginationList}</div>
  );
}

export default Pagination;

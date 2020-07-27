import React from 'react';
import { Link} from "@reach/router";

function Header({link}) {
  let navigation = link && 
    <navigation className = "header__navigation">
      <Link to="/movie-app">Back to search</Link>
    </navigation>;
  return (
    <header className="header">
      <div className = "container">
        <div className = "row">
          <div className = "col-12">
            {navigation}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

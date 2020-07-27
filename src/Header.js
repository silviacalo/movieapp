import React from 'react';
import { Link} from "@reach/router";

function Header({link, keyword, activePage, tags}) {
  let navigation = link && 
    <nav className = "header__navigation">
      <Link to="/movie-app" state = {{keyword, activePage, tags}}>Back to search</Link>
    </nav>;
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

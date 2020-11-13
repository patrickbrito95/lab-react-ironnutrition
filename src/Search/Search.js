import React from 'react';
import 'bulma/css/bulma.css';
import './Search.css';


function Search(){
    return(
        <div>
            <input className="searchBar" type="text" placeholder="Search.."></input>
        </div>
    )
};

export default Search;
import './Search.css';
import React from 'react'

import searchLogo from "../../resources/svgs/search.svg";

const Search = () => {
    return (
        <div className="search">
            <label htmlFor="search">
                <img src={searchLogo} alt="Search" />
            </label>
            <input type="text" name="search" id="search" placeholder='search...'/>
        </div>
    )
}

export default Search

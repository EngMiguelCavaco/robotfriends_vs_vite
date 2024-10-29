// import React from "react";

const SearchBox = ({searchChange}) => {
    return(
        <input
            name="searchbox" 
            className= "tc pa3 ba b--green bg-lightest-blue" 
            type="search" 
            placeholder="Search for Robots"
            onChange={searchChange}
        />
    )
}

export default SearchBox;
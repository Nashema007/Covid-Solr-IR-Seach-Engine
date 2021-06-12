import React from 'react';
import {StyledSearchBar} from './style/SearchBar.css.js'

const SearchBar = (props) => {
  
  return (
    <>
      <StyledSearchBar
        value={props.input}
        placeholder="Please enter at most 3 keywords..."
        onChange={(event) => props.onChange(event.target.value)}
      />
     </>
  );
}

export default SearchBar
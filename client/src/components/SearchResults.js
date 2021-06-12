import React from 'react';
import {StyledResults, StyledBody} from './style/SearchResults.css.js'
import { Link } from 'react-router-dom'
var slugify = require('slugify')


const SearchResults = (props) => {
    return (
      <>
      {(props.searchResults != null) && props.searchResults.map((data,index) => {
        if (data) {
            let title = data['metadata.title']
            if (!title){
                title = data["bib_entries.BIBREF0.title"] 
            }
            let body = " "
            data['body_text.text'].forEach(element => {
                body += element
            });
            let slugTtile = slugify(data.paper_id[0])
            return (
                <>
                    <Link to={`/${slugTtile}`}>
                        <StyledResults key={data.paper_id[0]}>
                            <h3>{ title }</h3>
                            <StyledBody>
                                {`${body.slice(0,250)}...`}
                            </StyledBody>
                        </StyledResults>
                    </Link>
                    
                </>
            )	
        }
        return null
      }) }
      </>
    );
    
  }
 
  export default SearchResults
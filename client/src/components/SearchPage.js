import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import {StyledSearchPage} from './style/SearchPage.css'
import SearchResults from './SearchResults.js'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import Result from './Result.js'
const SearchPage = (props) => {
      
      const [input, setInput] = useState('');
      const [searchResultList, setSearchResultList] = useState(null)

      const updateInput = async (input) => {
        setInput(input);
      }
      let param = ""
      const inputString = input.split(" ")
      if (inputString.length >= 1 && inputString.length <= 3){
        param = input.toLowerCase()
      }
     let url = 'http://localhost:3001/api/'
      useEffect(()=>{
        axios.get(url,  {
          params: {
            q: param
          }
        })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(response =>{
        if (response.data.statusCode !== 400){
          let data = response.data
          setSearchResultList(data)
        }
        else{
          setSearchResultList([])
        }
      })
      },  [url, param])
      
  return (
    <>
     <Router>
      <Switch>
        <Route path='/' exact>
            <StyledSearchPage>
              <h1>Covid 19 search</h1>
              <SearchBar 
              input={input} 
              onChange={updateInput}
              />
              <SearchResults searchResults={searchResultList}/>
            </StyledSearchPage>
          </Route>
          <Route path="/:title" component={Result} />
        </Switch>
    </Router>
      
    </>
   );
}

export default SearchPage
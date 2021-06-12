import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import {StyledResults, StyledBody, StyledNav, StyleAuthor} from './style/Results.css.js'
import { Link } from 'react-router-dom'

const Result = ({match}) => {
    const [searchResultList, setSearchResultList] = useState(null)
    let param = match.params.title
    console.log(param)
    let url = `http://localhost:3001/api/doc/`
    useEffect(()=>{
    axios.get(url,  {
        params: {
        q: param
        }
    })
    .catch(function (error) {
    // handle error
    console.log('The Error is:')
    console.log(error);
    })
    .then(response =>{
    if (response.data.statusCode !== 404){
        let data = response.data
        console.log(data)
        setSearchResultList(data[0])
    }
    })
    },  [url, param])
    if (searchResultList != null){
        let title = searchResultList['metadata.title']
        if (!title){
            title = searchResultList["bib_entries.BIBREF0.title"] 
        }
        let body = searchResultList['body_text.text']
        let sections = searchResultList['body_text.section']
        console.log(title)

    let authorFirst = searchResultList['metadata.authors.first']
    let authorLast = searchResultList['metadata.authors.last']
    let authorNames = []
    let i=0
    for (i=0; i < authorFirst.length; i++){
        authorNames.push(`${authorFirst[i]} ${authorLast[i]}, `)
    }
        
    
    return (<>
            <StyledNav>
            <Link to='/'>
                Search Engine 
            </Link>
            </StyledNav>
            <StyledResults key={searchResultList.paper_id[0]}>
                    <h2>{ title }</h2>
                    <StyleAuthor>
                    <h3>Authors</h3>
                    <p>{authorNames}</p>
                    </StyleAuthor>
                    {body.map((item, index)=>{
                        return (
                            <>
                        <h3>{sections[index]}</h3>
                        <StyledBody>
                            {item}
                        </StyledBody>
                        </>)
                    }
                    )}
                   
            </StyledResults>

            </>)
        }
    return null
}

export default Result
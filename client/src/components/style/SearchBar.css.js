import styled from 'styled-components'

const grey = "#dfe1e5"
const black = "#000"
const white = "#FFF"
export const StyledSearchBar = styled.input.attrs(props=>({
    type: 'text'
}))`
    width:40%;
    background-color:${white};
    height: 40px;
    border: 2px ${grey} solid;
    border-radius: 20px;
    padding-left:20px;
    font-size:18px;
    ::placeholder{
        font-size: 18px;
        text-align: center;
        color: black;
        font-weight: 100;
        color:${black}
        
    }
    &:focus-visible{
        outline:none;
    }
        
`

import styled from 'styled-components'

const headingBlue = "#1a0dab"
const paragraphGrey = "#4d5156"
export const StyledResults = styled.div`
    width:50%;
    height:100px;
    margin:0 auto;
    font-family: arial,sans-serif;
    margin-top:50px;
    h3 {
        margin-top:20px;
        text-align:left;
        color:${headingBlue};
        &:hover{
            text-decoration: underline;
            text-decoration-thickness: 2px;
        }
    }
`
export const StyledBody = styled.p`
        text-align:left;
        color: ${paragraphGrey};
        margin-top: -15px;
`
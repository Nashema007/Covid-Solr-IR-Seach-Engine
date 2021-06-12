import styled from 'styled-components'

const headingBlue = "#1a0dab"
const paragraphGrey = "#4d5156"
const navBlue = '#00003f'
const white = '#fff'
const black = '#000'
export const StyledNav = styled.div`
    background-color:${navBlue};
    padding:40px;

    a {
        color:${black};
        text-decoration: none;
        width:50px;
        border: 1px solid ${white};
        padding: 16px;
        border-radius: 5px;
        background-color: ${white};
        font-weight:500;
}
    }

`
export const StyledResults = styled.div`
    height: 100px;
    margin: 50px 20px 100px 20px;
    font-family: arial,sans-serif;
    padding-bottom: 100px;
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
        text-align:justify;
        color: ${paragraphGrey};
        line-height: 30px;
        word-spacing: 2px;
        font-size: 17px;
`
export const StyleAuthor = styled.div`

    h3 {
    margin: 0 auto;
    color: ${black};
    width:100px;
}

`

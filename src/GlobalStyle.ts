import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root
    {
        --primaryColor: #000000;
        --secundaryColor: #D9D9D9;
        --finishColor: #A60321; 
    }
    *
    {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    *, *::after, *::before
    {
        box-sizing: inherit;
    }
    body
    {
        background-color: var(--primaryColor);
        min-height: 100vh;
        max-width: 100vw;
        color: var(--secundaryColor);
        line-height: 1.5;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }
    ul
    {
        list-style: none;
    }
`;
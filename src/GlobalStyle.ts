import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root
    {
        --primaryColor: #000000;
        --secundaryColor: #D9D9D9;
        --finishColor: #A60321;
        --fontLight: 300;
        --fontRegular: 400;
        --fontMedium: 500;
        --fontSemibold: 600;
        --fontBold: 700;
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
    body
    {
        background-color: var(--primaryColor);
        min-height: 100vh;
        max-width: 100vw;
        color: var(--secundaryColor);
        line-height: 1.5;
        font-family: 'Montserrat', sans-serif;
        font-weight: var(---fontRegular);
    }
    ul
    {
        list-style: none;
    }
    @media screen and (min-width: 700px)
    {
        #root
        {
            max-width: 1400px;
            margin: 0 auto;
        }
    }
`;
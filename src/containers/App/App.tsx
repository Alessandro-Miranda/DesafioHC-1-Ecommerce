import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Header from '../../components/Header/Header';

const GlobalStyle = createGlobalStyle`
    #root
    {
        display: grid;
        grid-template-columns: repeat(12, 75px);
    }
`;

const desktopTheme = {
    primaryColor: '#000000',
    secundaryColor: '#D9D9D9',
    finishColor: '#A60321',
    fontFamily: 'Montserrat',
    alternativeFont: 'sans-serif',
    fontSize: '16px',
    gridColumns: 12,
    gridColumnSize: '75px',
    gridRowSize: '75px',
    gridColumnGutter: '35px',
    gridRowGutter: '20px',
    sideMargins: '170px',
};

const mobileTheme = {
    ...desktopTheme,
    gridColumn: 4,
    gridColumnSize: '75px',
    gridRowSize: '75px',
    gridColumnGutter: '10px',
    gridRowGutter: '20px',
    sideMargins: '25px',
}

function App() {
    const windowWidth = window.innerWidth;
    const theme = windowWidth > 700 ? desktopTheme : mobileTheme;

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
        </ThemeProvider>
    );
}

export default App;

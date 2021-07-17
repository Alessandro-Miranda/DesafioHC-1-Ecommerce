import React from 'react';
import { useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header';
import SectionBreak from '../../components/SectionBreak/SectionBreak';
import { GlobalStyle } from '../../GlobalStyle';
import Benefits from '../Benefits/Benefits';
import Categories from '../Categories/Categories';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';

const App = () => {  
    useEffect(() => {
        localStorage.clear();
    }, []);

    return (
        <>
            <GlobalStyle />
            <Header />
            <Banner/>
            <Benefits />
            <SectionBreak />
            <Categories />
            <SectionBreak />
            <Register/>
            <Footer />
        </>
    );
}

export default App;

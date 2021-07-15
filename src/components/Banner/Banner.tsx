import React from 'react';
import { ThemeProvider } from 'styled-components';
import MainBanner from '../../containers/MainBanner/MainBanner';
import Form from '../Form/Form';

import { H1, H2 } from './style';

const themeSemiBold = {
    color: 'secundaryColor',
    fontWeight: 500
};

const themeBold = {
    color: 'finishColor',
    fontWeight: 600
};

const Banner = () => {
    return (
        <MainBanner>
            <H1>
                Promoções mega especiais para você
            </H1>

            <ThemeProvider theme={themeSemiBold}>
                <H2>
                    Todos os produtos com até
                </H2>
            </ThemeProvider>
            
            <ThemeProvider theme={themeBold}>
                <H2 className="discount">
                    80% de desconto
                </H2>
            </ThemeProvider>

            <Form />
        </MainBanner>
    );
}

export default Banner;
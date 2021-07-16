import React from 'react';
import { ThemeProvider } from 'styled-components';
import MainBanner from '../../containers/MainBanner/MainBanner';
import Form from '../Form/Form';

// @ts-ignore
import banner from '../../assets/images/banner.png';

import { DesktopFormContainer, DesktopImageContainer, H1, H2, Image } from './style';
import SocialMedias from '../SocialMedias/SocialMedias';

const themeSemiBold = {
    color: 'secundaryColor',
    fontWeight: 500
};

const themeBold = {
    color: 'finishColor',
    fontWeight: 600
};

const socialMediasTheme = {
    direction: 'column'
};

const Banner = () => {
    return (
        <MainBanner>
            <DesktopFormContainer>
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

                <Form {
                    ...{
                        formTitle: 'Cadastre seu e-mail e receba as melhores promoções',
                        className: 'bannerForm'
                    }
                } />
            </DesktopFormContainer>

            <DesktopImageContainer>
                <Image src={banner} alt="Banner black friday" />
            </DesktopImageContainer>

            <ThemeProvider theme={socialMediasTheme}>
                <SocialMedias />
            </ThemeProvider>
        </MainBanner>
    );
}

export default Banner;
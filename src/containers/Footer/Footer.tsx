import React from "react";
import { ThemeProvider } from "styled-components";
import SocialMedias from "../../components/SocialMedias/SocialMedias";

import { Div, FooterContainer, Small } from './style';

const Footer = () => {
    
    const theme = {
        direction: "row"
    };
    
    return (
        <FooterContainer>
            <Div>
                Dúvidas? Entre em contato pelas nossas redes sociais
            </Div>
            <ThemeProvider theme={theme}>
                <SocialMedias />
            </ThemeProvider>
            <Small>&copy; Alessandro Miranda</Small>
        </FooterContainer>
    );
}

export default Footer;
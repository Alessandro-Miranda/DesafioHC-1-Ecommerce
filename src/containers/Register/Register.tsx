import React from "react";
import style, { ThemeProvider } from 'styled-components';
import Form from "../../components/Form/Form";

const Section = style.section`
    max-width: 95%;
    text-align: center;
    margin: 0 auto;
`;

const theme = {
    textTransform: 'uppercase'
};

const Register = () => {
    return (
        <Section>
            <ThemeProvider theme={theme}>
                <Form {...{
                    formTitle: "não fique de fora das nossas promoções"
                }} />
            </ThemeProvider>
        </Section>
    );
}

export default Register;
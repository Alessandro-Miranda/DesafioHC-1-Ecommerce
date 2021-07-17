import React from "react";
import style, { ThemeProvider } from 'styled-components';
import Form from "../../components/Form/Form";

const Section = style.section`
    max-width: 95%;
    text-align: center;
    margin: 0 auto;

    @media screen and (min-width: 700px)
    {
        margin: 150px auto 0 auto;

        & section.registerBreakSection
        {
            max-width: 720px;
            margin: 0 auto;
        }
        & section.registerBreakSection h3
        {
            font-size: 23px;
        }
    }
`;

const theme = {
    textTransform: 'uppercase'
};

const Register = () => {
    return (
        <Section>
            <ThemeProvider theme={theme}>
                <Form {
                    ...{
                        formTitle: "não fique de fora das nossas promoções",
                        className: 'registerBreakSection'
                    }
                } />
            </ThemeProvider>
        </Section>
    );
}

export default Register;
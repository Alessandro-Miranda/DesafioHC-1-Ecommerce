import React from 'react';
import style from 'styled-components';

type Props = {
    children: React.ReactNode
}

const Section = style.section`
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

const MainBanner = (props: Props) => {
    return (
        <Section>
            {props.children}
        </Section>
    );
}

export default MainBanner;
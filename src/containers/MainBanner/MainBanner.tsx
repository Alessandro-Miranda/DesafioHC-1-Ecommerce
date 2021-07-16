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

    & aside
    {
        display: none;
    }

    @media screen and (min-width: 700px)
    {
        flex-direction: row;
        max-width: 100%;
        justify-content: flex-start;
        margin-top: 80px;

        & aside
        {
            display: flex;
            justify-self: flex-end;
            position: relative;
        }

        & aside svg:nth-child(2)
        {
            margin-top: 40px;
            margin-bottom: 40px;
        }
        & aside::before
        {
            content: '';
            position: absolute;
            top: -105px;
            right: -55px;
            width: 139px;
            height: .5px;
            background: var(--finishColor);
            transform: rotate(90deg);
        }
        & aside::after
        {
            content: '';
            position: absolute;
            bottom: -105px;
            right: -55px;
            width: 139px;
            height: .5px;
            background: var(--finishColor);
            transform: rotate(90deg);
        }
    }
`;

const MainBanner = (props: Props) => {
    return (
        <Section>
            {props.children}
        </Section>
    );
}

export default MainBanner;
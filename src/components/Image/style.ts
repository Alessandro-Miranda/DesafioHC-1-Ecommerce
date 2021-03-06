import style from 'styled-components';

export const Div = style.div`
    max-width: 100%;
    width: max-content;
    height: max-content;
    position: relative;
    margin-top: 15px;

    @media screen and (min-width: 700px)
    {
        margin-top: 62px;
        &:first-of-type
        {
            grid-column-start: 1;
            grid-column-end: 6;
            grid-row-start: 1;
        }

        &:nth-child(2)
        {
            grid-column-start: 6;
            grid-column-end: 15;
            grid-row-start: 1;
            grid-row-end: 4
        }

        &:nth-child(3)
        {
            grid-column-start: 6;
            grid-column-end: 15;
            grid-row-start: 4;
        }

        // Efeito sombreamento
        &:first-of-type picture::after
        {
            max-width: 1000px;
            width: 405px;
            max-height: 600px;
            height: 590px;
            opacity: 0;
            transition: opacity .2s ease-in;
        }

        &:nth-child(2) picture::after, &:nth-child(3) picture::after
        {
            max-width: 1000px;
            width: 614px;
            max-height: 600px;
            height: 281px;
            opacity: 0;
            transition: opacity .2s ease-in;
        }

        &:hover picture::after
        {
            opacity: .7;
        }
        &:hover picture + span
        {
            opacity: 1;
            bottom: 30px;
        }
    }
`;

export const Picture = style.picture`
    position: relative;
    max-width: 414px;
    width: 393px;
    max-height: 350px;
    height: 350px;
    max-height: max-content;

    &::after
    {
        content: '';
        position: absolute;
        top: 0;
        max-width: 414px;
        width: 393px;
        max-height: 350px;
        height: 350px;
        background: #030303;
        opacity: .7;
    }

    @media screen and (min-width: 700px)
    {
        max-width: 100%;
        width: max-content;
        max-height: 100%;
        height: auto;
    }
`;

export const Img = style.img`
    display: block;
    max-width: 100%;
    width: 393px;
    height: max-content;

    @media screen and (min-width: 700px)
    {
        width: max-content;
        height: auto;
    }
`;

export const Span = style.span`
    position: absolute;
    bottom: 40px;
    color: var(--finishColor);
    font-weight: var(--fontBold);
    font-size: 20px;
    text-transform: uppercase;
    left: calc(100% / 2);
    transform: translateX(-50%);

    @media screen and (min-width: 700px)
    {
        opacity: 0;
        bottom: 0px;
        transition: opacity .2s ease-in, bottom .2s ease-in; 
    }
`;
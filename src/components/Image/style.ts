import style from 'styled-components';

export const Div = style.div`
    max-width: 100%;
    width: max-content;
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

        & > picture:nth-child(2)
        {
            background: blue;
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

        &:first-of-type
        {
            width: 405px;
        }

        &:nth-child(2), &:nth-child(3)
        {
            width: 800px;
        }
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
`;
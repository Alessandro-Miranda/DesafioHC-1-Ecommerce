import style from 'styled-components';

export const Span = style.span`
    background: var(--finishColor);
    display: inline-block;
    width: 45px;
    height: 1.5px;
    margin-right: 20px;
    transform: translateY(-250%);

    @media screen and (min-width: 700px)
    {
        width: 75px;
        transform: translateY(-400%);
    }
`;

export const H1 = style.h1`
    width: 100%;
    line-height: 35px;
    font-weight: var(--fontSemibold);
    font-size: 20px;

    @media screen and (min-width: 700px)
    {
        font-size: 24px;
    }
`;

export const P = style.p`
    font-size: 14px;
    color: var(--finishColor);
    font-weight: var(--fontSemibold);
    margin-top: 4px;
`;
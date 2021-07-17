import style from 'styled-components';

export const Article = style.article`
    width: 85%;
    height: max-content;
    background: #201F1F;
    margin: 50px auto 0 auto;
    padding: 25px 0 50px 20px;

    @media screen and (min-width: 700px)
    {
        width: 300px;
        height: 350px;

        &:nth-child(2)
        {
            border: 2px solid var(--finishColor);
        }
    }
`;

export const Svg = style.svg`
    display: block;
    margin-bottom: 40px;
`;

export const H1 = style.h1`
    font-weight: var(--fontBold);
    margin-bottom: 30px;
`;

export const P = style.p`
    font-weight: var(--fontLight);
    max-width: 80%;
`;
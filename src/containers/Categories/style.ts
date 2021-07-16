import style from 'styled-components';

export const Section = style.section`
    width: 95%;
    margin: 0 auto;

    @media screen and (min-width: 700px)
    {
        width: 100%;
        margin: 120px 0 0 0;
    }
`;

export const ImagesContainer = style.div`
    max-width: 100%;
    margin-top: 40px;

    @media screen and (min-width: 700px)
    {
        display: grid;
        grid-template-columns: repeat(14, 75px);
        grid-template-rows: repeat(7, 75px);
        gap: 53.5px 35px;
        margin-top: 50px;
    }
`;
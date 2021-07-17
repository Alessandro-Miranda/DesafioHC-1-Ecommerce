import style from 'styled-components';

export const Section = style.section`
    width: 95%;
    margin: 0 auto;

    @media screen and (min-width: 700px)
    {
        width: 100%;
        margin: 150px 0 150px 0;
        padding: 0 155px;
    }
`;

export const ImagesContainer = style.div`
    max-width: 100%;
    margin-top: 40px;

    @media screen and (min-width: 700px)
    {
        display: grid;
        grid-template-columns: repeat(10, 75px);
        grid-template-rows: repeat(7, 75px);
        gap: 28px 10px;
        margin-top: 50px;
    }
`;
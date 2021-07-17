import style from 'styled-components';

export const Section = style.section`
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 30px auto 0 auto;

    @media screen and (min-width: 700px)
    {
        width: 100%;
        margin: 100px auto 0 auto;
        padding: 0 155px;
    }
`;

export const CardsContainer = style.div`
    @media screen and (min-width: 700px)
    {
        display: flex;
        flex-direction: row;
        margin-top: 72px;
        margin-bottom: 120px;
    }
`;
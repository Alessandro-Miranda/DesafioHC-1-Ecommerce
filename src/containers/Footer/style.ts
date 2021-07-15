import style from 'styled-components';

export const FooterContainer = style.footer`
    width: 100vw;
    border-top: 1px solid var(--finishColor);
    opacity: .45;
    padding: 25px 25px 10px 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 100px;
`;

export const Div = style.div`
    max-width: 80%;
    font-size: 16px;
    margin: 0 auto 25px auto;
    text-align: center;
`;

export const Small = style.small`
    align-self: center;
    font-size: 14px;
    margin-top: 70px;
`;
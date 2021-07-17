import style from 'styled-components';

export const Container = style.section`
    max-width: 95%;
    display: flex;
    flex-direction: column;
    flex-align: center;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 50px;
`;

export const H3 = style.h3`
    font-weight: var(--fontMedium);
    font-size: 20px;
    text-align: center;
    text-transform: ${props => props.theme && props.theme.textTransform}
`;

export const Input = style.input`
    width: 80%;
    background: transparent;
    border: 1px solid var(--secundaryColor);
    border-radius: 5px;
    display: block;
    margin: 25px auto 0 auto;
    height: 50px;
    color: var(--secundaryColor);
    padding: 0 25px;
    font-weight: var(--fontLight);
    &:focus
    {
        outline: none;
    }
`;

export const ErrorNotification = style.span`
    display: block;
    margin-top: 10px;
    font-size: 14px;
    color: var(--finishColor);
`;

export const Button = style.button`
    text-transform: uppercase;
    width: 80%;
    display: block;
    margin: 35px auto 0 auto;
    padding: 0 15px;
    background: var(--finishColor);
    border-radius: 5px;
    outline: none;
    height: 50px;
    color: var(--secundaryColor);
    transition: opacity .2s ease-in;

    &:hover
    {
        cursor: pointer;
        opacity: .8;
    }
`;
import style from 'styled-components';

export const HeaderContainer = style.header`
    font-size: ${props => props.theme.fontSize};
    color: ${props => props.theme.secundaryColor};
    grid-column: 7;
    background: red;
`;

export const HeaderItem = style.div`
    
`;
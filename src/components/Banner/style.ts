import style from 'styled-components';

export const H1 = style.h1`
    font-weight: ${props => props.theme.fontWeight};
    font-size: 24px;
    color: var(--${props => props.theme.color});
    text-align: center;
`;

export const H2 = style.h2`
    font-weight: ${props => props.theme.fontWeight};
    font-size: 30px;
    color: var(--${props => props.theme.color});
    max-width: 95%;
    text-align: center;
    margin-top: 35px;
    &.discount
    {
        margin-top: 0;
    }
`;

H1.defaultProps = {
    theme: {
        color: 'finishColor',
        fontWeight: 300
    }
}

H2.defaultProps = {
    theme: {
        color: 'finishColor',
        fontWeight: 300
    }
}
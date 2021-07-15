import style from 'styled-components';

export const Aside = style.aside`
    display: flex;
    flex-direction: ${props => props.theme && props.theme.direction};
    justify-content: space-between;
`;

export const Svg = style.svg`
    cursor: pointer;

    &:hover path
    {
        fill: var(--secundaryColor);
    }
`;

export const Path = style.path`
    transition: all .2s ease;
`;
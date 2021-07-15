import style from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeaderContainer = style.header`
    height: max-content;
    padding: .875rem 1.875rem;
    position: relative;
`;

export const MenuIcon = style(FontAwesomeIcon)`
    font-size: 2.175rem;
    color: var(--finishColor);
    display: block;
    margin-left: auto;

    @media screen and (min-width: 700px)
    {
        display: none;
    }
`;

export const HeaderNav = style.nav`
    display: block;
    background: var(--finishColor);
    width: 100%;
    height: max-content;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform .3s ease-in-out;
    transform: translateY(-100%); 
    svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        color: var(--primaryColor);
        font-size: 1.575rem;
    }
`;

export const HeaderLi = style.li`
    text-transform: uppercase;
    text-align: center;
    padding: 20px 0;
    font-weight: 600;
    border-bottom: 1px solid var(--primaryColor);
`;
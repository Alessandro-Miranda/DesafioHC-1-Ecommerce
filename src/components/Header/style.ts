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
    transition: transform .1s ease;
    transform: translateY(-100%); 
    svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        color: var(--primaryColor);
        font-size: 1.575rem;
    }

    @media screen and (min-width: 700px)
    {
        transform: translateY(0%);
        background: none;
        position: relative;
        width: max-content;
        margin-left: auto;
        margin-right: 137px;
    }
`;

export const HeaderUl = style.ul`
    @media screen and (min-width: 700px)
    {
        display: flex;
        flex-direction: row;
    }
`;

export const HeaderLi = style.li`
    text-transform: uppercase;
    text-align: center;
    padding: 24px 0;
    font-weight: 600;
    border-bottom: 1px solid var(--primaryColor);

    @media screen and (min-width: 700px)
    {
        padding: 20px 0;
        transition: border-color .4s ease-out;

        &.selected
        {
            font-weight: 500;
            opacity: .75;
            border-bottom: 2px solid var(--finishColor);
        }

        &:nth-child(2)
        {
            margin-left: 43px;
            margin-right: 43px;
        }

        &:hover
        {
            cursor: pointer;
            border-bottom: 2px solid var(--finishColor);   
        }
    }
`;
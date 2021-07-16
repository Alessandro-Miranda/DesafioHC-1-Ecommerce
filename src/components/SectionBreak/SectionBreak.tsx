import React from "react";
import style from 'styled-components';

const Span = style.span`
    display: block;
    margin: 80px auto;
    width: 65px;
    height: 2px;
    background: var(--finishColor);
    transform: rotate(90deg);

    @media screen and (min-width: 700px)
    {
        width: 95px;
    }
`;

const SectionBreak = () => {
    return (
        <Span />
    );
}

export default SectionBreak;
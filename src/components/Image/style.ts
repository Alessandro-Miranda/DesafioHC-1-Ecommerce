import style from 'styled-components';

export const Div = style.div`
    max-width: 100%;
    position: relative;margin-top: 15px;
`;

export const Picture = style.picture`
    position: relative;
    max-width: 414px;
    width: 393px;
    max-hieght: 350px;
    height: 350px;
    max-height: max-content;

    &::after
    {
        content: '';
        position: absolute;
        top: 0;
        max-width: 414px;
        width: 393px;
        max-hieght: 350px;
        height: 350px;
        background: #030303;
        opacity: .7;
    }
`;

export const Img = style.img`
    display: block;
    max-width: 100%;
    width: 393px;
    height: max-content;
`;

export const Span = style.span`
    position: absolute;
    bottom: 40px;
    color: var(--finishColor);
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    left: calc(100% / 2);
    transform: translateX(-50%);
`;
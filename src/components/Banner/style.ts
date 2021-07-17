import style from 'styled-components';

export const H1 = style.h1`
    font-weight: ${props => props.theme.fontWeight};
    font-size: 24px;
    color: var(--${props => props.theme.color});
    text-align: center;

    @media screen and (min-width: 700px)
    {
        text-align: left;
    }
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
    
    @media screen and (min-width: 700px)
    {
        font-size: 36px;
        text-align: left;
        margin-top: 5px;
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

export const DesktopFormContainer = style.div`
    width: 100vw;

    @media screen and (min-width: 700px)
    {
        width: 550px;
        margin-left: 150px;
    
        & section.bannerForm
        {
            margin-top: 110px;
        }
        & section.bannerForm h3
        {
            width: max-content;
            text-align: left;
            font-size: 18px;
            letter-spacing: .1px;
            font-weight: var(--fontLight);
        }
        & section.bannerForm form
        {
            width: 480px;
    
            & > input, > button
            {
                width: 100%;
            }
        }
    }
`;

export const DesktopImageContainer = style.div`
    display: none;

    @media screen and (min-width: 700px)
    {
        display: block;
        margin-left: 0px;
        margin-right: 47px;
    }
`;

export const Image = style.img`
    width: 525px;
    height: auto;
`;
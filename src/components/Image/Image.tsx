import React from "react";

import { Div, Img, Picture, Span } from './style';

type Props = {
    srcSetMobile: string;
    srcSetDesktop: string;
    alt: string;
    category: string;
};

const Image = (props: Props) => {
    return (
        <Div>
            <Picture>
                <source media="(max-width: 699px)" srcSet={props.srcSetMobile} />
                <source media="(min-width: 700px)" srcSet={props.srcSetDesktop} />
                <Img src={props.srcSetDesktop} loading="lazy" alt={props.alt} />
            </Picture>
            <Span>{props.category}</Span>
        </Div>
    );
}

export default Image;
import React from 'react';

import { H1, Article, P, Svg } from './style';

type SvgProps = {
    width: string;
    height: string;
    viewBox: string;
    fill: string;
    xmlns: string;
    path: {
        d: string;
        fill: string;
    }
};

type Props = {
    svg: SvgProps;
    title: string;
    content: string;
};

const Card = (props: Props) => {
    return (
        <Article>
            <Svg
                width={props.svg.width}
                height={props.svg.height}
                viewBox={props.svg.viewBox}
                fill={props.svg.fill}
                xmlns={props.svg.xmlns}
            >
                <path d={props.svg.path.d} fill={props.svg.path.fill} />
            </Svg>

            <H1>{props.title}</H1>
            <P>{props.content}</P>
        </Article>
    );
}

export default Card;
import React from 'react';
import { H1, P, Span } from './style';

type Props = {
    title: string;
    subtitle: string;
}

const SectionTitles = (props: Props) => {
    return (
        <>
            <H1>
                <Span />
                {props.title}
            </H1>
            <P>{props.subtitle}</P>
        </>
    );
}

export default SectionTitles;
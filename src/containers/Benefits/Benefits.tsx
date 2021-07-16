import React from 'react';
import Card from '../../components/Card/Card';
import { CardsContainer, Section } from './style';
import { cardsDatas } from '../../data/cardsDatas';
import SectionTitles from '../../components/SectionTitles/SectionTitles';

const Benefits = () => {
    const informations = {
        title: "Benefícios",
        subtitle: "O melhor para você"
    }
    return (
        <Section>
            <SectionTitles {...informations} />
                <CardsContainer>
                    {
                        cardsDatas.map((cardInfo, index) => {
                            return <Card {...cardInfo} key={index} />
                        })
                    }
                </CardsContainer>
        </Section>
    );
}

export default Benefits;
import React from "react";
import Image from "../../components/Image/Image";
import SectionTitles from "../../components/SectionTitles/SectionTitles";

import { Section, ImagesContainer } from './style';

// @ts-ignore
import casualMobile from '../../assets/images/casual-mobile.png'; // @ts-ignore
import casualDesktop from '../../assets/images/casual-desktop.png'; // @ts-ignore
import femininoMobile from '../../assets/images/feminino-mobile.png'; // @ts-ignore
import femininoDesktop from '../../assets/images/feminino-desktop.png'; // @ts-ignore
import masculinoMobile from '../../assets/images/masculino-mobile.png'; // @ts-ignore
import masculinoDesktop from '../../assets/images/masculino-desktop.png';

const Categories = () => {
    const informations = {
        title: 'Categorias',
        subtitle: 'Itens que combinam com você'
    };

    const imagesInformations = [
        {
            category: "casual",
            srcSetMobile: casualMobile,
            srcSetDesktop: casualDesktop,
            alt: "Modelo de vestimentas casuais"
        },
        {
            category: "feminino",    
            srcSetMobile: femininoMobile,
            srcSetDesktop: femininoDesktop,
            alt: "Modelo feminina utilizando casaco de frio"
        },
        {
            category: "masculino",    
            srcSetMobile: masculinoMobile,
            srcSetDesktop: masculinoDesktop,
            alt: "Modelo masculino utilizando casaco de frio"
        }
    ];
    
    return (
        <Section>
            <SectionTitles {...informations} />
            <ImagesContainer>

                {
                    imagesInformations.map((information) => {
                        return (
                            <Image {...information} key={information.category} />
                        );
                    })
                }
            </ImagesContainer>
        </Section>
    );
}

export default Categories;
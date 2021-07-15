import React from "react";
import Image from "../../components/Image/Image";
import SectionTitles from "../../components/SectionTitles/SectionTitles";

import { Section, ImagesContainer } from './style';

// @ts-ignore
import casualMobile from '../../assets/images/casual-mobile.png';
// @ts-ignore
import casualDesktop from '../../assets/images/casual-desktop.png';
// @ts-ignore
import femaleMobile from '../../assets/images/feminino-mobile.png';
// @ts-ignore
import femaleDesktop from '../../assets/images/feminino-desktop.png';
// @ts-ignore
import maleMobile from '../../assets/images/masculino-mobile.png';
// @ts-ignore
import maleDesktop from '../../assets/images/masculino-desktop.png';

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
            srcSetMobile: femaleMobile,
            srcSetDesktop: femaleDesktop,
            alt: "Modelo feminina utilizando casaco de frio"
        },
        {
            category: "masculino",    
            srcSetMobile: maleMobile,
            srcSetDesktop: maleDesktop,
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
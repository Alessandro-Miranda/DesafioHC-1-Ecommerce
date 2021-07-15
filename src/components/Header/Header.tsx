import React, { useState, useRef } from 'react';
import { 
    HeaderContainer,
    MenuIcon,
    HeaderNav,
    HeaderLi,
    HeaderUl
} from './style';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [ menuIsOpen, setMenuIsOpen ] = useState(false);
    
    const menuList = useRef();

    const toggleShowMenu = () => {
        const list = menuList.current as HTMLElement;

        if(menuIsOpen)
        {
            list.style.transform = 'translateY(-100%)';
        }
        else
        {
            list.style.transform = 'translateY(0%)';
        }

        setMenuIsOpen(!menuIsOpen);
    }

    return (
        <HeaderContainer>
            <MenuIcon
                icon={faBars}
                onClick={toggleShowMenu}
            />
            <HeaderNav ref={menuList}>
                <MenuIcon
                    icon={faTimes}
                    onClick={toggleShowMenu}
                />
                <HeaderUl>
                    <HeaderLi className="selected">
                        Home
                    </HeaderLi>
                    <HeaderLi>
                        Sobre
                    </HeaderLi>
                    <HeaderLi>
                        Contato
                    </HeaderLi>
                </HeaderUl>
            </HeaderNav>
        </HeaderContainer>
    )
}

export default Header;
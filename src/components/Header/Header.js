import React, { useState } from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import Wrapper from '../Wrapper/Wrapper';
import Navigation from '../Navigation/Navigation';

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    function handleMenuButton() {
        setShowMenu(prev => !prev);
    }

    return (
        <header className="header">
            <Wrapper className="wrapper_no-padding">
                <div className="header__group">
                    <div className="header__menu">
                        <Link to="/" className='header__logo'>PokemonsApi</Link>
                        <button className={`header__menu-button ${!showMenu && `header__menu-button_active`} ${showMenu && `header__menu-button_close`}`} onClick={handleMenuButton}></button>
                    </div>
                    <Navigation showMenu={showMenu} />
                </div>
            </Wrapper>
        </header >
    );
}

export default Header;
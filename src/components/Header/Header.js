import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import Wrapper from '../Wrapper/Wrapper';
import Navigation from '../Navigation/Navigation';

function Header() {
    return (
        <header className="header">
            <Wrapper>
                <div className="header__group">
                    <div className="header__mobile-group">
                        <Link to="/" className={`header__logo`}>PokemonsApi</Link>
                        <button className="header__menu-button header__menu-button_active"></button>
                    </div>
                    <Navigation />
                </div>
            </Wrapper>
        </header>
    );
}

export default Header;
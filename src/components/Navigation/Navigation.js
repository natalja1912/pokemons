import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './Navigation.css';

function Navigation({ showMenu }) {
    const location = useLocation();

    return (
        <nav className={`nav ${showMenu && `nav_active`}`}>
            <Link to="/" className={`nav__link ${location.pathname === '/' && `nav__link_type_active`}`}>Главная</Link>
            <Link to="/my-collection" className={`nav__link ${location.pathname === '/my-collection' && `nav__link_type_active`}`}>Избранное</Link>
        </nav>
    );
}

export default Navigation;
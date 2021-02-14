import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';

function Navigation() {
    return (
        <nav className="nav">
            <Link to="/" className={`nav__link`}>Главная</Link>
            <Link to="/my-collection" className={`nav__link`}>Избранное</Link>
        </nav>
    );
}

export default Navigation;
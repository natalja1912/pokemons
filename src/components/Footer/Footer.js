import React from 'react';
import { Link } from "react-router-dom";
import Wrapper from '../Wrapper/Wrapper';
import './Footer.css';

function Footer() {
    return (
        <Wrapper>
            <footer className="footer">
                <p className="footer__copyright">&copy;2021&nbsp;Natalia&nbsp;Pavlova</p>
                <div className="footer__links-group">
                    <div className="footer__links">
                        <Link className="footer__link" to="/">Главная</Link>
                    </div>
                    <div className="footer__icons">
                        <a className="footer__icon footer__icon_type_github" rel="noreferrer" target="_blank" href="https://github.com/natalja1912"></a>
                    </div>
                </div>
            </footer>
        </Wrapper>
    );
}

export default Footer;
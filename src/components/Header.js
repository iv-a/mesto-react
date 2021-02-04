import React from 'react';
import logo from '../images/header_logo.svg';

export default function Header() {
    return (
        <header className="header page__header">
            <img className="header__logo" src={logo} alt="Лого Mesto" />
        </header>
    );
}
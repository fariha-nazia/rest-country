import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welocom to The World of Vaccion</h1>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;
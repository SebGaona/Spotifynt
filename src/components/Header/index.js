import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className='title'>
                Spotifyn't
            </Link>
        </header>
    );
};

export default Header;
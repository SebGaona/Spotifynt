import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderCont, Title } from './styles'

const Header = () => {
    return (
        <HeaderCont className="header">
            <Title as={Link} to="/" className='title'>
                Spotifyn't
            </Title>
        </HeaderCont>
    );
};

export default Header;
import React, { Component } from 'react'
import logo from '../img/logo.png'


class Header extends Component {
    render() {
        return (
                <header className='header'>
                    <img className='logo' src={logo} alt='Logo' />
                    <span className='title'>Spotifyn't</span>
                </header>
        )
    }
}

export default Header;
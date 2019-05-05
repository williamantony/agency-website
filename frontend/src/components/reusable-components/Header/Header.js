import React from 'react';
import './Header.css';
import HeaderLogo from './components/HeaderLogo/HeaderLogo';
import HeaderNav from './components/HeaderNav/HeaderNav';
import HeaderSearchIcon from './components/HeaderSearchIcon/HeaderSearchIcon';
import HeaderMenuIcon from './components/HeaderMenuIcon/HeaderMenuIcon';

const Header = () => (
  <header className="Header">
    <div className="wrapper">    
      <div className="Header__content">
        <HeaderLogo />
        <HeaderNav />
        <div className="Header__icons">
          <HeaderSearchIcon />
          <div className="Header__icons__divider"></div>
          <HeaderMenuIcon />
        </div>
      </div>
    </div>
  </header>
);

export default Header;

import React from 'react';
import './HeaderMenuIcon.css';
import Hamburger from '../Hamburger/Hamburger';

const HeaderMenuIcon = () => (
  <div className="HeaderMenuIcon Header__item" tabIndex="0">
    <div className="Header__item__background"></div>
    <Hamburger isOpen={ false } />
  </div>
);

export default HeaderMenuIcon;

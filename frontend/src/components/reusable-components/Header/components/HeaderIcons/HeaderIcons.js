import React from 'react';
import './HeaderIcons.css';
import Hamburger from '../Hamburger/Hamburger';

const HeaderIcons = () => (
  <div className="HeaderIcons">

    <div className="HeaderIcon HeaderIcon--search" tabIndex="0">
      <div className="HeaderIcon__background"></div>
      <div className="HeaderIcon__icon HeaderIcon__icon--search"></div>
    </div>

    <div className="HeaderIcon__divider"></div>

    <div className="HeaderIcon HeaderIcon--menu" tabIndex="0">
      <div className="HeaderIcon__background"></div>
      <Hamburger isOpen={ false } />
    </div>

  </div>
);

export default HeaderIcons;

import React from 'react';
import './HeaderNav.css';

const HeaderNavItem = ({ text, link }) => (
  <li className="HeaderNavItem Header__item">
    <a href={ link } className="HeaderNavItem__link" tabIndex="0">
      <div className="Header__item__background"></div>
      <div className="HeaderNavItem__text">{ text }</div>
    </a>
  </li>
);

const HeaderNav = () => (
  <nav className="HeaderNav">
    <ul className="HeaderNav__list">
      <HeaderNavItem text="Services" link="/services" />
      <HeaderNavItem text="Pricing" link="pricing" />
      <HeaderNavItem text="Support" link="support" />
    </ul>
  </nav>
);

export default HeaderNav;

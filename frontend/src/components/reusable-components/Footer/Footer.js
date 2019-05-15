import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <section className="Footer">
    <div className="wrapper">
    
      <nav className="Footer__nav">
        <ul className="Footer__nav__list">
          <li className="Footer__nav__list__item">
            <Link to="/" className="Footer__nav__list__item__link">Home</Link>
          </li>
          <li className="Footer__nav__list__item">
            <Link to="/services" className="Footer__nav__list__item__link">Services</Link>
          </li>
          <li className="Footer__nav__list__item">
            <Link to="/pricing" className="Footer__nav__list__item__link">Pricing</Link>
          </li>
          <li className="Footer__nav__list__item">
            <Link to="/support" className="Footer__nav__list__item__link">Contact</Link>
          </li>
        </ul>
      </nav>

    </div>
  </section>
);

export default Footer;

import React from 'react';
import './Hamburger.css';

const Hamburger = ({ isOpen = false }) => (
  <div className="Hamburger">
    <div className="icon" data-open={ isOpen }>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  </div>
);

export default Hamburger;

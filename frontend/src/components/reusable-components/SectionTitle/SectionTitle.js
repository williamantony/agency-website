import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ text = '', align = 'center', bgColor = 'white' }) => (
  <div className={`SectionTitle SectionTitle--${ align }`}>
    <div className="SectionTitle__line" />
    <h2 className="SectionTitle__h2" style={{ backgroundColor: bgColor }}>{ text }</h2>
  </div>
);

export default SectionTitle;

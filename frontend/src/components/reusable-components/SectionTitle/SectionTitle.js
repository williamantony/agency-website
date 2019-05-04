import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ text = '' }) => (
  <div className="SectionTitle">
    <h2 className="SectionTitle__h2">{ text }</h2>
  </div>
);

export default SectionTitle;

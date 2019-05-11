import React from 'react';
import './PageTitle.css';

const PageTitle = ({ text = '', align = 'center' }) => (
  <div className={`PageTitle PageTitle--${ align }`}>
    <div className="wrapper">
      <h1 className="PageTitle__h1">{ text }</h1>
    </div>
  </div>
);

export default PageTitle;

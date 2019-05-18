import React from 'react';
import './Button.css';

const Button = ({ text = null, children = null, color = 'light', events = {} }) => {
  return (
  <button className={`Button Button--${color}`} {...events} tabIndex="0">
    <div className="Button__bg"></div>
    <div className="Button__text">{ text }</div>
  </button>
)};

export default Button;

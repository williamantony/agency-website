import React from 'react';
import './BoxItem.css';

const BoxItem = ({ type = 1, title = '', description = '', link = 'javascript: return false;', icon = '', onClick = (() => {}) }) => (
  <a href={link} className={ `BoxItem BoxItem--type-${ type }` } tabIndex="0" onClick={ onClick }>
    {/* <div className={ `BoxItem BoxItem--type-${ type }` }> */}
      <div className={ `BoxItem__icon BoxItem__icon--${ icon }` }></div>
      <div className="BoxItem__text">
        <div className="BoxItem__title">{ title }</div>
        <div className="BoxItem__desc">{ description }</div>
      </div>
      <div className="BoxItem__button">
        <div className="BoxItem__button__text">Learn More</div>
        <div className="BoxItem__button__arrow"></div>
      </div>
    {/* </div> */}
  </a>
);

export default BoxItem;

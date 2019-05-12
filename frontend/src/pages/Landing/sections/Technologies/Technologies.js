import React from 'react';
import './Technologies.css';

const Technologies = () => (
  <section className="Technologies">
    <div className="wrapper">
      <div className="Technologies__list">
        <div className="Technologies__list__item">
          <div className="Technologies__list__item__holder">
            <div className="Technologies__list__item__image Technologies__list__item__image--node" />
          </div>
        </div>
        <div className="Technologies__list__item">
          <div className="Technologies__list__item__holder">
            <div className="Technologies__list__item__image Technologies__list__item__image--react" />
          </div>
        </div>
        <div className="Technologies__list__item">
          <div className="Technologies__list__item__holder">
            <div className="Technologies__list__item__image Technologies__list__item__image--mysql" />
          </div>
        </div>
        <div className="Technologies__list__item">
          <div className="Technologies__list__item__holder">
            <div className="Technologies__list__item__image Technologies__list__item__image--wordpress" />
          </div>
        </div>
        <div className="Technologies__list__item">
          <div className="Technologies__list__item__holder">
            <div className="Technologies__list__item__image Technologies__list__item__image--aws" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Technologies;

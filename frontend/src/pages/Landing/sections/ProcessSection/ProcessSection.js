import React from 'react';
import './ProcessSection.css';
import SectionTitle from '../../../../components/reusable-components/SectionTitle/SectionTitle';

const ProcessSection = () => (
  <section className="ProcessSection">
    <div className="wrapper">
      <SectionTitle text="How it works" align="left" bgColor="#f5f5f5" />
      <div className="ProcessSection__process">
        <div className="ProcessSection__process__item">
          <div className="ProcessSection__process__item__icon">1</div>
          <div className="ProcessSection__process__item__title">Discover</div>
          <div className="ProcessSection__process__item__desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </div>
        </div>
        <div className="ProcessSection__process__item">
          <div className="ProcessSection__process__item__icon">2</div>
          <div className="ProcessSection__process__item__title">Planning</div>
          <div className="ProcessSection__process__item__desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </div>
        </div>
        <div className="ProcessSection__process__item">
          <div className="ProcessSection__process__item__icon">3</div>
          <div className="ProcessSection__process__item__title">Development</div>
          <div className="ProcessSection__process__item__desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </div>
        </div>
        <div className="ProcessSection__process__item">
          <div className="ProcessSection__process__item__icon">4</div>
          <div className="ProcessSection__process__item__title">Launch</div>
          <div className="ProcessSection__process__item__desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;

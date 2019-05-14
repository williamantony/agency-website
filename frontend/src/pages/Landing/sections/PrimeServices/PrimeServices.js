import React from 'react';
import './PrimeServices.css';
import SectionTitle from '../../../../components/reusable-components/SectionTitle/SectionTitle';

const PrimeServices = () => (
  <section className="PrimeServices">
    <div className="wrapper">
      <div className="PrimeServices__holder">
      
        <div className="PrimeServices__image">
          <div className="PrimeServices__image__bg-image"></div>
          <div className="PrimeServices__image__bg-overlay"></div>
        </div>

        <div className="PrimeServices__content">
          <SectionTitle text="Solutions" align="left" />
          <div className="PrimeServices__item">
            <div className="PrimeServices__item__holder">
              <div className="PrimeServices__item__icon PrimeServices__item__icon--new-website"></div>
              <div className="PrimeServices__item__text">
                <div className="PrimeServices__item__title">Create new website</div>
                <div className="PrimeServices__item__desc">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </div>
              </div>
            </div>
          </div>

          <div className="PrimeServices__item">
            <div className="PrimeServices__item__holder">
              <div className="PrimeServices__item__icon PrimeServices__item__icon--website-revamp"></div>
              <div className="PrimeServices__item__text">
                <div className="PrimeServices__item__title">Revamp existing website</div>
                <div className="PrimeServices__item__desc">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </div>
              </div>
            </div>
          </div>

          <div className="PrimeServices__item">
            <div className="PrimeServices__item__holder">
              <div className="PrimeServices__item__icon PrimeServices__item__icon--seo"></div>
              <div className="PrimeServices__item__text">
                <div className="PrimeServices__item__title">Search Optimization</div>
                <div className="PrimeServices__item__desc">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);
    
export default PrimeServices;

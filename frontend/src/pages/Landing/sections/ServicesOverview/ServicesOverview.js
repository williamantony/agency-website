import React, { Component } from 'react';
import './ServicesOverview.css';

class ServicesOverview extends Component {

  render() {
    return (
      <section className="ServicesOverview">
        <div className="wrapper">

          <div className="ServicesOverview__list">
            <div className="ServicesOverview__list__item">

              <div className="ServicesOverview__list__item__icon ServicesOverview__list__item__icon--new-website"></div>
              <div className="ServicesOverview__list__item__text">
                <div className="ServicesOverview__list__item__text__title">
                  New Website Development
                </div>
                <div className="ServicesOverview__list__item__text__desc">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </div>
              </div>
            </div>
            <div className="ServicesOverview__list__item">


              <div className="ServicesOverview__list__item__icon ServicesOverview__list__item__icon--website-revamp"></div>
              <div className="ServicesOverview__list__item__text">
                <div className="ServicesOverview__list__item__text__title">
                  Re-design Existing Website
                </div>
                <div className="ServicesOverview__list__item__text__desc">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </div>
              </div>

            </div>
            <div className="ServicesOverview__list__item">

              <div className="ServicesOverview__list__item__icon ServicesOverview__list__item__icon--seo"></div>
              <div className="ServicesOverview__list__item__text">
                <div className="ServicesOverview__list__item__text__title">
                  Optimize website for SEO
                </div>
                <div className="ServicesOverview__list__item__text__desc">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    );
  }

}

export default ServicesOverview;

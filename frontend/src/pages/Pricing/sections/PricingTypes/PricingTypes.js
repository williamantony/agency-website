import React, { Component } from 'react';
import './PricingTypes.css';
import Button from '../../../../components/reusable-components/Button/Button';

class PricingTypes extends Component {

  render() {
    return (
      <section className="PricingTypes">
        <div className="wrapper">

          <div className="PricingTypes__intro">
            <h2 className="PricingTypes__intro__h2">
              Your most <span className="PricingTypes__intro__h2--highlight">affordable</span> options.
            </h2>
          </div>
          <div className="PricingTypes__content">
            <div className="PricingTypes__item">
              <div className="PricingTypes__item__head">
                <div className="PricingTypes__item__name">Standard</div>
                <div className="PricingTypes__item__circles">
                  <div className="PricingTypes__item__circles__item"></div>
                </div>
                <div className="PricingTypes__item__price">
                  <div className="PricingTypes__item__starting-at">Starting at *</div>
                  <div className="PricingTypes__item__price__holder">
                    <div className="PricingTypes__item__price__dollar-sign">USD</div>
                    <div className="PricingTypes__item__price__amount">250</div>
                  </div>
                </div>
              </div>
              <div className="PricingTypes__item__content">

                <div className="PricingTypes__desc">
                  Choose from a variety of packages already created to be suitable for businesses and professionals.
                </div>
                <div className="PricingTypes__button">
                  <div className="PricingTypes__button__text">Browse standard packages</div>
                  <div className="PricingTypes__button__icon"></div>
                </div>

              </div>
            </div>
            <div className="PricingTypes__item PricingTypes__item--primary">
              <div className="PricingTypes__item__head">
                <div className="PricingTypes__item__name">Premium</div>
                <div className="PricingTypes__item__circles">
                  <div className="PricingTypes__item__circles__item"></div>
                  <div className="PricingTypes__item__circles__item"></div>
                  <div className="PricingTypes__item__circles__item"></div>
                </div>
                <div className="PricingTypes__item__price">
                  <div className="PricingTypes__item__starting-at">Starting at *</div>
                  <div className="PricingTypes__item__price__holder">
                    <div className="PricingTypes__item__price__dollar-sign">USD</div>
                    <div className="PricingTypes__item__price__amount">25</div>
                    <div className="PricingTypes__item__price__slash">/</div>
                    <div className="PricingTypes__item__price__recur">mo</div>
                  </div>
                </div>
              </div>
              <div className="PricingTypes__item__content">

                <div className="PricingTypes__desc">
                  Customize your package with only the features and services you want. Ongoing maintenance is included.
                </div>
                <div className="PricingTypes__button">
                  <div className="PricingTypes__button__text">Build your package</div>
                  <div className="PricingTypes__button__icon"></div>
                </div>


              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }

}

export default PricingTypes;

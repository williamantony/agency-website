import React from 'react';
import './LandingIntro.css';

const LandingIntro = () => (
  <section className="LandingIntro">
    <div className="wrapper">

      <div className="LandingIntro__image"></div>

      <div className="LandingIntro__content">
        <div className="LandingIntro__block">

          <h1 className="LandingIntro__text">
            <span className="LandingIntro__text--a">A </span><span className="LandingIntro__text--highlight">web development agency</span> <span className="LandingIntro__text--break" />
            focused on improving user&nbsp;experience.
            {/* A web development agency focused on<br/> eXceeding your eXpectations. */}
            {/* A web development agency<br/>focused on improving user experience. */}
            {/* A development agency focused on<br/>customized web application. */}
            {/* A web development agency focused on<br/>unconventional solutions. */}
          </h1>

          <div className="LandingIntro__actions">

            <button className="LandingIntro__button LandingIntro__button--learn">
              <span className="LandingIntro__button__text">Learn about our services</span>
              <div className="LandingIntro__button__arrow">
                <div className="LandingIntro__button__arrow__img"></div>
              </div>
            </button>

            <button className="LandingIntro__button LandingIntro__button--getstarted">
              <span className="LandingIntro__button__text">Get Started</span>
              <div className="LandingIntro__button__arrow">
                <div className="LandingIntro__button__arrow__img"></div>
              </div>
            </button>

          </div>

        </div>
      </div>

    </div>
  </section>
);

export default LandingIntro;

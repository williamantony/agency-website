import React from 'react';
import './Landing.css';
import LandingIntro from './sections/LandingIntro/LandingIntro';
import Header from '../../components/reusable-components/Header/Header';
import GetSupport from './sections/GetSupport/GetSupport';
import WhyChoose from './sections/WhyChoose/WhyChoose';
import Technologies from './sections/Technologies/Technologies';
import ProcessSection from './sections/ProcessSection/ProcessSection';
import PrimeServices from './sections/PrimeServices/PrimeServices';

const Landing = () => (
  <div className="Landing">
    <Header />
    <LandingIntro />
    <PrimeServices />
    <Technologies />
    <ProcessSection />
    <WhyChoose />
    <GetSupport />
  </div>
);

export default Landing;

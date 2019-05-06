import React from 'react';
import './GetSupport.css';
import SectionTitle from '../../../../components/reusable-components/SectionTitle/SectionTitle';
import ContactLinks from '../../../../components/reusable-components/ContactLinks/ContactLinks';
import ContactInfo from '../../../../components/reusable-components/ContactInfo/ContactInfo';

const GetSupport = () => (
  <section className="GetSupport">
    <div className="wrapper">
      <SectionTitle text="Get Support" />
      <div className="GetSupport__content">
        <div className="GetSupport__content__column">
          <ContactLinks />
        </div>
        <div className="GetSupport__content__column">
          <ContactInfo />
        </div>
      </div>
    </div>
  </section>
);

export default GetSupport;

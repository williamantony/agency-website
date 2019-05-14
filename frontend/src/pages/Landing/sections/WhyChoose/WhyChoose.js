import React from 'react';
import './WhyChoose.css';
import SectionTitle from '../../../../components/reusable-components/SectionTitle/SectionTitle';
import BoxItem from '../../../../components/reusable-components/BoxItem/BoxItem';

const WhyChoose = () => (
  <section className="WhyChoose">
    <div className="wrapper">
      <SectionTitle text="Why Choose Us" align="left" bgColor="#fafafa" />
      <div className="WhyChoose__list">
        <BoxItem
          type="3"
          title="Performance"
          description="
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          icon="subscription"
        />
        <BoxItem
          type="3"
          title="Secure & Reliable"
          description="
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          icon="pricematch"
        />
        <BoxItem
          type="3"
          title="Affordable"
          description="
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          icon="pricematch"
        />
      </div>
    </div>
  </section>
);

export default WhyChoose;

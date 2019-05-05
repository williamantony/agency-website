import React from 'react';
import './ContactLinks.css';

const ContactLinks = () => (
  <div className="ContactLinks">
    <div className="ContactLinks__set">
      <div className="ContactLinks__set__title">New Customer</div>
      <div className="ContactLinks__set__item">Request a free quote</div>
      <div className="ContactLinks__set__item">I have question about your service</div>
    </div>
    <div className="ContactLinks__set">
      <div className="ContactLinks__set__title">Existing Customer</div>
      <div className="ContactLinks__set__item">Submit maintenance request</div>
    </div>
    <div className="ContactLinks__buttons">
      <div className="ContactLinks__buttons__item">Send us a message</div>
      <div className="ContactLinks__buttons__item ContactLinks__buttons__item--dark">Request a callback</div>
      <div className="ContactLinks__buttons__item ContactLinks__buttons__item--dark">Frequently asked questions</div>
    </div>
  </div>
);

export default ContactLinks;

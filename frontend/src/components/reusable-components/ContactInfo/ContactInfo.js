import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => (
  <div className="ContactInfo">
    <div className="ContactInfo__content">
      <div className="ContactInfo__title">Phone Number</div>
      <div className="ContactInfo__phone">
        <div className="ContactInfo__phone__text">
          <div className="ContactInfo__phone__vanity">1.888.880.WILL</div>
          Or, 1.888.880.9455
        </div>
        <div className="ContactInfo__phone__icon" />
      </div>
      <div className="ContactInfo__title">Hours of Operations</div>
      <div className="ContactInfo__hours">
        <div className="ContactInfo__hours__item">
          <span>Monday</span>
          <span>9 am - 5 pm</span>
        </div>
        <div className="ContactInfo__hours__item">
          <span>Tuesday</span>
          <span>9 am - 5 pm</span>
        </div>
        <div className="ContactInfo__hours__item">
          <span>Wednesday</span>
          <span>9 am - 5 pm</span>
        </div>
        <div className="ContactInfo__hours__item">
          <span>Thursday</span>
          <span>9 am - 5 pm</span>
        </div>
        <div className="ContactInfo__hours__item">
          <span>Friday</span>
          <span>9 am - 5 pm</span>
        </div>
        <div className="ContactInfo__hours__item">
          <span>Saturday</span>
          <span>Closed</span>
        </div>
        <div className="ContactInfo__hours__item">
          <span>Sunday</span>
          <span>Closed</span>
        </div>
      </div>
      <div className="ContactInfo__note">
        Note: all times are in Central Time (America/Chicago)
      </div>
    </div>
  </div>
);

export default ContactInfo;

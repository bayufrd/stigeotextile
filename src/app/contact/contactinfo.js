'use client';

import { addressData } from './addressData';

const ContactInfo = () => {
  return (
    <div className="contact-info-section">
      <h3><strong>CONTACT INFO</strong></h3>
      <div className="contact-details">
        <div className="details-wrapper">
          <address>
            <br/>{addressData.name}<br/>
            {addressData.address} <br/>
            {addressData.city}<br />
            <strong>Phone:</strong> {addressData.phone}<br />
            <strong>Fax:</strong> {addressData.fax}<br />
            <strong>Email:</strong> <a href={`mailto:${addressData.email}`}>{addressData.email}</a>
          </address>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
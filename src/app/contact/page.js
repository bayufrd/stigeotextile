'use client';

import dynamic from 'next/dynamic';
import '../../styles/globals.css';
import ContactInfo from './contactinfo.js';

const MapComponent = dynamic(
  () => import('../components/MapsCompany'),
  { ssr: false }
);

const Page = () => {
  return (
    <div style={{ paddingTop: '0px' }}>
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">CONTACT</h1>
        </div>
      </div>
      <div className="map-section">
        <MapComponent />
      </div>
      <div className="contact-container">
        <ContactInfo />
      </div>
    </div>
  );
};


export default Page;
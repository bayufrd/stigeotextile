'use client';

import dynamic from 'next/dynamic';
import ContactInfo from './contactinfo.js';

const MapComponent = dynamic(
  () => import('../components/MapsCompany'),
  { ssr: false }
);

const Page = () => {
  return (
    <div style={{ paddingTop: '0px' }}>
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
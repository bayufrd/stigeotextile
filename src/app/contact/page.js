'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link'; // Importing Link from Next.js
import ContactInfo from './contactinfo.js';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing social media icons
import { addressData } from '../data/addressData';

const MapComponent = dynamic(
  () => import('../components/MapsCompany'),
  { ssr: false }
);

const Page = () => {
  return (
    <div style={{ paddingTop: '0px' }}>
      <div className="contact-container">
        <ContactInfo />
      </div>
      <div className="map-section">
        <MapComponent />
      </div>
    </div>
  );
};

export default Page;

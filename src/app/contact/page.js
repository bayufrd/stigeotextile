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
      <div className="follow-us-section p-6 text-center mt-8">
        <h3 className="text-xl font-semibold mb-4">Follow Us:</h3>
        <div className="flex justify-center items-center space-x-6">
          <Link href={addressData.social.facebook} target="_blank" rel="noopener noreferrer">
            <div className="bg-[#0A1E2B] text-white p-4 rounded-full flex items-center justify-center">
              <FaFacebookF className="w-6 h-6" />
            </div>
          </Link>
          <Link href={addressData.social.twitter} target="_blank" rel="noopener noreferrer">
            <div className="bg-[#0A1E2B] text-white p-4 rounded-full flex items-center justify-center">
              <FaTwitter className="w-6 h-6" />
            </div>
          </Link>
          <Link href={addressData.social.instagram} target="_blank" rel="noopener noreferrer">
            <div className="bg-[#0A1E2B] text-white p-4 rounded-full flex items-center justify-center">
              <FaInstagram className="w-6 h-6" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;

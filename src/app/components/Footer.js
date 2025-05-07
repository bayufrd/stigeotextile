'use client';

import { useState } from 'react';
import ContactModal from '../components/ContactModal';
import { addressData } from '../data/addressData';
import { navigation } from '../data/navigation';
import Link from 'next/link'; // Importing Link from Next.js
import Image from 'next/image';
import ContactInfo from '../contact/contactinfo';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing social media icons
import dynamic from 'next/dynamic';

// Dynamically import the MapComponent to avoid SSR issues
const MapComponent = dynamic(
  () => import('../components/MapsCompany'),
  { ssr: false }
);

export default function Footer() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <footer className="relative text-white py-8">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/80/ad/63/80ad631f67f14b858f04f8faab8cfeae.jpg')", 
          filter: "brightness(0.3)",
          backgroundAttachment: "fixed"
        }}
      ></div>
      
      {/* Content with relative positioning to appear above the background */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              {/* Logo implementation with Next.js Image */}
              <div className="flex items-start">
                <Image
                    src="/logo/logo_navbar.svg"
                    alt={addressData.name}
                    width={150}
                    height={120}
                    priority
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold">{addressData.name}</h2>
          </div>

          {/* Navigation (You can add navigation items here) */}
          <div className="flex flex-col md:pt-[125px]">
            {/* Add navigation links dynamically if needed */}
            {navigation.map((item, index) => (
              <Link key={index} href={item.href} className="text-gray-300 mb-2">{item.label}</Link>
            ))}
          </div>

          {/* Work Hours */}
          <div className="flex flex-col md:pt-[125px]">
            <h3 className="text-lg font-bold mb-2">Jam Kerja</h3>
            <p className="text-gray-300">{addressData.hours}</p>
          </div>
        </div>

        {/* Contact Info and Map Section */}
        <div className="contact-container mt-8">
          <ContactInfo />
        </div>

        <div className="map-section mt-8">
          <MapComponent />
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>© 2025 dastrevas. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

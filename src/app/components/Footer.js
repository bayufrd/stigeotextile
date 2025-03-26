'use client';

import { useState } from 'react';
import ContactModal from '../components/ContactModal';
import { addressData } from '../data/addressData';
import { navigation } from '../data/navigation';
import Link from 'next/link';
import Image from 'next/image';

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
            <div className="text-gray-300 mb-4">
              <div className="contact-info-section">
                <div className="contact-details">
                  <div className="details-wrapper">
                    <address>
                      {addressData.address} <br/>
                      {addressData.city}<br />
                      <strong>Phone:</strong><br/>
                      -Banten: {addressData.phone.banten}<br/>
                      -Jakarta: {addressData.phone.jakarta}<br/>
                      -Kalimantan Barat: {addressData.phone.kalimantanbarat}<br />
                      <strong>Fax:</strong> {addressData.fax}<br />
                      <strong>Email:</strong> <a href={`mailto:${addressData.email}`} className="text-gray-300 hover:text-white">{addressData.email}</a>
                    </address>
                  </div>
                </div>
              </div>
            </div>{/* 
            <div className="flex space-x-4">
              <Link href={addressData.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href={addressData.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href={addressData.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href={`https://wa.me/${addressData.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <i className="fab fa-whatsapp"></i>
              </Link>
            </div> */}
          </div>
          {/* Navigation - Menggunakan data dari navigation.js dengan padding sesuai */}
          <div className="flex flex-col md:pt-[125px]">
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Work Hours - dengan padding sesuai */}
          <div className="flex flex-col md:pt-[125px]">
            <h3 className="text-lg font-bold mb-2">Work Hours</h3>
            <p className="text-gray-300">{addressData.hours}</p>
            
            <div className="mt-4">
            <button
              onClick={openModal}
              className="inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors cursor-pointer"
            >
              Call Us
            </button>
            </div>
            <ContactModal isOpen={isModalOpen} onClose={closeModal} />

          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>© 2025 dastrevas. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
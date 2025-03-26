'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import { addressData } from '../data/addressData';
import Link from 'next/link';

const ContactInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="contact-info p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Call Us Card dengan Modal */}
        <div className="bg-white p-4 rounded-2xl text-center shadow-lg flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-opacity" onClick={openModal}>
          <FaPhone className="w-6 h-6 mx-auto mb-2 text-[#1F3D57]" />
          <p className="font-semibold text-[#1F3D57]">CALL US</p>
          <p className="text-[#1F3D57] text-center">Click to choose contact</p>
        </div>
        
        {/* Email Card */}
        <Link href={`mailto:${addressData.email}`} className="bg-white p-4 rounded-2xl text-center shadow-lg flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
          <FaEnvelope className="w-6 h-6 mx-auto mb-2 text-[#1F3D57]" />
          <p className="font-semibold text-[#1F3D57]">CONTACT US</p>
          <p className="text-[#1F3D57] text-center">{addressData.email}</p>
        </Link>
        
        {/* Visit Us Card */}
        <Link 
          href={`https://maps.google.com/?q=${addressData.address} ${addressData.city}`}
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-white p-4 rounded-2xl text-center shadow-lg flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
        >
          <FaMapMarkerAlt className="w-6 h-6 mx-auto mb-2 text-[#1F3D57]" />
          <p className="font-semibold text-[#1F3D57]">VISIT US</p>
          <p className="text-[#1F3D57] text-center">{addressData.address} {addressData.city}</p>
        </Link>
      </div>
      
      {/* Modal Pop-up untuk Contact */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full relative" onClick={e => e.stopPropagation()}>
            {/* Tombol tutup */}
            <button 
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer"
            >
              <FaTimes className="w-5 h-5" />
            </button>
            
            <h3 className="text-xl font-bold text-[#1F3D57] mb-4 text-center">Choose Contact to Call</h3>
            
            <div className="space-y-3">
              <a 
                href={`tel:${addressData.phone.banten}`}
                className="block w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-center text-[#1F3D57] font-medium transition-colors"
              >
                <span className="font-semibold">Banten:</span> {addressData.phone.banten}<br/>
              </a>
              
              <a 
                href={`tel:${addressData.phone.jakarta}`}
                className="block w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-center text-[#1F3D57] font-medium transition-colors"
              >
                <span className="font-semibold">Jakarta:</span> {addressData.phone.jakarta}<br/>
              </a>
              
              <a 
                href={`tel:${addressData.phone.kalimantanbarat}`}
                className="block w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-center text-[#1F3D57] font-medium transition-colors"
              >
                <span className="font-semibold">Kalimantan Barat:</span> {addressData.phone.kalimantanbarat}
              </a>
            </div>
            
            <p className="mt-4 text-sm text-gray-500 text-center">Click on a contact to initiate a call</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
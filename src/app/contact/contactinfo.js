'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { addressData } from '../data/addressData';
import Link from 'next/link';
import ContactModal from '../components/ContactModal';

const ContactInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="contact-info p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Call Us Card */}
        <div
          className="bg-white p-4 rounded-2xl text-center shadow-lg flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
          onClick={openModal}
        >
          <FaPhone className="w-6 h-6 mx-auto mb-2 text-[#1F3D57]" />
          <p className="font-semibold text-[#1F3D57]">CALL US</p>
          <p className="text-[#1F3D57] text-center">Click to choose contact</p>
        </div>

        {/* Email Card */}
        <Link
          href={`mailto:${addressData.email}`}
          className="bg-white p-4 rounded-2xl text-center shadow-lg flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
        >
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

      {/* Modal Called */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ContactInfo;

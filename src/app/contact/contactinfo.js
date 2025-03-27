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
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Call Us Card */}
    <div
  className="bg-white p-4 rounded-2xl text-center shadow-lg flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
  onClick={openModal}
>
  <FaPhone className="w-6 h-6 sm:w-7 sm:h-7 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 mx-auto mb-2 text-[#1F3D57]" />
  <p className="font-semibold text-[#1F3D57] text-sm sm:text-sm md:text-sm lg:text-sm">CALL US</p>
  <p className="text-[#1F3D57] text-xs sm:text-sm md:text-base lg:text-sm">Click to choose contact</p>
</div>

{/* Email Card */}
<Link
  href={`mailto:${addressData.email}`}
  className="bg-white p-4 rounded-2xl text-center shadow-lg flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
>
  <FaEnvelope className="w-6 h-6 sm:w-7 sm:h-7 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 mx-auto mb-2 text-[#1F3D57]" />
  <p className="font-semibold text-[#1F3D57] text-sm sm:text-sm md:text-sm lg:text-sm">CONTACT US</p>
  <p className="text-[#1F3D57] text-xs sm:text-sm md:text-sm lg:text-sm">{addressData.email}</p>
</Link>

{/* Visit Us Card */}
<Link
  href={`https://maps.google.com/?q=${addressData.address} ${addressData.city}`}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white p-4 rounded-2xl text-center shadow-lg flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
>
  <FaMapMarkerAlt className="w-6 h-6 sm:w-7 sm:h-7 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 mx-auto mb-2 text-[#1F3D57]" />
  <p className="font-semibold text-[#1F3D57] text-sm sm:text-sm md:text-base lg:text-sm">VISIT US</p>
  <p className="text-[#1F3D57] text-xs sm:text-sm md:text-base lg:text-sm">{addressData.address} {addressData.city}</p>
</Link>

  </div>

  {/* Modal Called */}
  <ContactModal isOpen={isModalOpen} onClose={closeModal} />
</div>
  );
};

export default ContactInfo;

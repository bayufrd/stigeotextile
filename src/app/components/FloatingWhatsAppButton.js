"use client";

import { useState } from "react";
import Link from "next/link";
import { addressData } from '../data/addressData';
import ContactModal from '../components/ContactModal';

const FloatingWhatsAppButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="fixed bottom-3 right-3 flex items-center space-x-2">
      {/* "Contact Us" Text Block with Green Background and White Text */}
      <div 
        className="border-2 border-[#2BB673] bg-[#2BB673] text-white p-2 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
        onClick={openModal}
      >
        Contact Us
      </div>

      {/* WhatsApp Button */}
      <div
        onClick={openModal} // Menggunakan div untuk membuka modal
        className="bg-[#2BB673] text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </div>
      
      {/* Modal Called */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default FloatingWhatsAppButton;
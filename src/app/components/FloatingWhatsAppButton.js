"use client";

import Link from "next/link";
import { addressData } from '../data/addressData';

const FloatingWhatsAppButton = () => {
  return (
    <div className="fixed bottom-3 right-3 flex items-center space-x-2">
      {/* "Contact Us" Text Block with Green Background and White Text */}
      <div className="border-2 border-[#2BB673] bg-[#2BB673] text-white p-2 rounded-lg flex items-center justify-center">
        Contact Us
      </div>

      {/* WhatsApp Button */}
      <Link
        href={`https://wa.me/${addressData.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#2BB673] text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
        style={{ cursor: 'pointer' }} // Ensure the cursor is not obstructed
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </Link>
    </div>
  );
};

export default FloatingWhatsAppButton;

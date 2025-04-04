'use client';

import { useState } from 'react';
import { FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { addressData } from '../data/addressData';
import Link from "next/link";

const ContactModal = ({ isOpen, onClose }) => {
  const [showCallContacts, setShowCallContacts] = useState(false);
  const [showWhatsAppContacts, setShowWhatsAppContacts] = useState(false);

  if (!isOpen) return null;

  // Fungsi untuk mengekstrak hanya angka dari string
  const extractNumbers = (phone) => {
    return phone.replace(/\D/g, ''); // Menghapus semua karakter non-digit
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div
        className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        {/* Call Dropdown Section */}
        <div className="mb-4">
          <button 
            className="w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-center text-[#1F3D57] font-bold flex items-center justify-between px-4 cursor-pointer"
            onClick={() => setShowCallContacts(!showCallContacts)}
          >
            <span>Choose Contact to Call</span>
            {showCallContacts ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          
          {showCallContacts && (
            <div className="space-y-3 mt-3">
              <a
                href={`tel:${extractNumbers(addressData.phone.banten)}`}
                className="block w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-center text-[#1F3D57] font-medium transition-colors"
              >
                <span className="font-semibold">Banten:</span> {addressData.phone.banten}
              </a>

              <a
                href={`tel:${extractNumbers(addressData.phone.jakarta)}`}
                className="block w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-center text-[#1F3D57] font-medium transition-colors"
              >
                <span className="font-semibold">Jakarta:</span> {addressData.phone.jakarta}
              </a>

              <a
                href={`tel:${extractNumbers(addressData.phone.kalimantanbarat)}`}
                className="block w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-center text-[#1F3D57] font-medium transition-colors"
              >
                <span className="font-semibold">Kalimantan Barat:</span> {addressData.phone.kalimantanbarat}
              </a>
              <p className="text-sm text-gray-500 text-center">Click on a contact to initiate a call</p>
            </div>
          )}
        </div>

        {/* WhatsApp Dropdown Section */}
        <div>
          <button 
            className="w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-center text-[#1F3D57] font-bold flex items-center justify-between px-4 cursor-pointer"
            onClick={() => setShowWhatsAppContacts(!showWhatsAppContacts)}
          >
            <span>Choose Contact to WhatsApp</span>
            {showWhatsAppContacts ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          
          {showWhatsAppContacts && (
            <div className="space-y-3 mt-3">
              <Link
                href={`http://wa.me/${extractNumbers(addressData.phone.banten)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-center text-[#1F3D57] font-medium transition-colors"
              >
                <span className="font-semibold">Banten:</span> {addressData.phone.banten}
              </Link>

              <Link
                href={`http://wa.me/${extractNumbers(addressData.phone.jakarta)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-center text-[#1F3D57] font-medium transition-colors"
              >
                <span className="font-semibold">Jakarta:</span> {addressData.phone.jakarta}
              </Link>

              <Link
                href={`http://wa.me/${extractNumbers(addressData.phone.kalimantanbarat)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-center text-[#1F3D57] font-medium transition-colors"
              >
                <span className="font-semibold">Kalimantan Barat:</span> {addressData.phone.kalimantanbarat}
              </Link>
              <p className="text-sm text-gray-500 text-center">Click on a contact to initiate a text</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
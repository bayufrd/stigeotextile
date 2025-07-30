'use client';

import { useState } from 'react';
import { FaTimes, FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { addressData } from '../data/addressData';
import Link from "next/link";

const ContactModal = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState(null);

  if (!isOpen) return null;

  // Fungsi untuk mengekstrak hanya angka dari string
  const extractNumbers = (phone) => {
    return phone.replace(/\D/g, '');
  };

  const extractNumbersWhatsapp = (phone) => {
    const digitsOnly = phone.replace(/\D/g, '');
    return digitsOnly.substring(1);
  };

  const contactSections = [
    {
      name: 'Banten',
      phone: addressData.phone.banten,
      icon: FaPhoneAlt
    },
    {
      name: 'Jakarta',
      phone: addressData.phone.jakarta,
      icon: FaPhoneAlt
    },
    {
      name: 'Kalimantan Barat',
      phone: addressData.phone.kalimantanbarat,
      icon: FaPhoneAlt
    }
  ];

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" 
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1F3D57] text-white p-6 flex justify-between items-center">
          <h2 className="text-xl font-bold">Hubungi Kami</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        {/* Contact Options */}
        <div className="p-6 space-y-4">
          {/* Call Section */}
          <div>
            <button 
              className={`
                w-full 
                py-4 
                rounded-lg 
                flex 
                items-center 
                justify-between 
                px-4 
                transition-colors
                ${activeSection === 'call' 
                  ? 'bg-[#1F3D57]/10 text-[#1F3D57]' 
                  : 'bg-gray-100 text-gray-700'}
              `}
              onClick={() => setActiveSection(activeSection === 'call' ? null : 'call')}
            >
              <div className="flex items-center space-x-3">
                <FaPhoneAlt />
                <span className="font-semibold">Telepon</span>
              </div>
              <span className="text-sm">
                {activeSection === 'call' ? '−' : '+'}
              </span>
            </button>

            {activeSection === 'call' && (
              <div className="mt-4 space-y-3">
                {contactSections.map((section, index) => (
                  <a
                    key={index}
                    href={`tel:${extractNumbers(section.phone)}`}
                    className="
                      block 
                      w-full 
                      py-3 
                      bg-gray-50 
                      hover:bg-gray-100 
                      rounded-lg 
                      text-[#1F3D57] 
                      font-medium 
                      transition-colors
                      flex 
                      items-center 
                      justify-between 
                      px-4
                    "
                  >
                    <div className="flex items-center space-x-3">
                      <section.icon className="text-[#1F3D57]" />
                      <span>{section.name}</span>
                    </div>
                    <span>{section.phone}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* WhatsApp Section */}
          <div>
            <button 
              className={`
                w-full 
                py-4 
                rounded-lg 
                flex 
                items-center 
                justify-between 
                px-4 
                transition-colors
                ${activeSection === 'whatsapp' 
                  ? 'bg-green-50 text-green-700' 
                  : 'bg-gray-100 text-gray-700'}
              `}
              onClick={() => setActiveSection(activeSection === 'whatsapp' ? null : 'whatsapp')}
            >
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="text-green-600" />
                <span className="font-semibold">WhatsApp</span>
              </div>
              <span className="text-sm">
                {activeSection === 'whatsapp' ? '−' : '+'}
              </span>
            </button>

            {activeSection === 'whatsapp' && (
              <div className="mt-4 space-y-3">
                {contactSections.map((section, index) => (
                  <Link
                    key={index}
                    href={`http://wa.me/+62${extractNumbersWhatsapp(section.phone)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      block 
                      w-full 
                      py-3 
                      bg-green-50 
                      hover:bg-green-100 
                      rounded-lg 
                      text-green-700 
                      font-medium 
                      transition-colors
                      flex 
                      items-center 
                      justify-between 
                      px-4
                    "
                  >
                    <div className="flex items-center space-x-3">
                      <FaWhatsapp className="text-green-600" />
                      <span>{section.name}</span>
                    </div>
                    <span>{section.phone}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Email Section */}
          <div>
            <button 
              className={`
                w-full 
                py-4 
                rounded-lg 
                flex 
                items-center 
                justify-between 
                px-4 
                transition-colors
                ${activeSection === 'email' 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'bg-gray-100 text-gray-700'}
              `}
              onClick={() => setActiveSection(activeSection === 'email' ? null : 'email')}
            >
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-600" />
                <span className="font-semibold">Email</span>
              </div>
              <span className="text-sm">
                {activeSection === 'email' ? '−' : '+'}
              </span>
            </button>

            {activeSection === 'email' && (
              <div className="mt-4 space-y-3">
                <Link
                  href={`mailto:${addressData.email}`}
                  className="
                    block 
                    w-full 
                    py-3 
                    bg-blue-50 
                    hover:bg-blue-100 
                    rounded-lg 
                    text-blue-700 
                    font-medium 
                    transition-colors
                    flex 
                    items-center 
                    justify-between 
                    px-4
                  "
                >
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-blue-600" />
                    <span>Kirim Email</span>
                  </div>
                  <span>{addressData.email}</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
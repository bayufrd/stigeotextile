"use client";

import { useState, useEffect, useRef } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import ContactModal from '../components/ContactModal';

const FloatingWhatsAppButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const buttonRef = useRef(null);

  // Efek untuk mengatur overflow body dan overlay
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  // Deteksi perangkat mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleButtonClick = (e) => {
    // Mencegah event default
    e?.preventDefault?.();
    e?.stopPropagation?.();

    if (isMobile) {
      openModal();
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  // Handler sentuhan khusus untuk mobile
  const handleTouchStart = (e) => {
    // Gunakan opsi non-passive untuk preventDefault
    if (e.cancelable) {
      e.preventDefault();
    }
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4"
      onMouseLeave={() => !isMobile && setIsExpanded(false)}
    >
      {/* Expanded Menu untuk non-mobile */}
      {isExpanded && !isMobile && (
        <div 
          className="
            flex 
            flex-col 
            space-y-3 
            mb-4 
            bg-white 
            shadow-2xl 
            rounded-2xl 
            p-4 
            border 
            border-gray-100 
            animate-slide-in-right
          "
        >
          <button 
            onClick={openModal}
            className="
              flex 
              items-center 
              space-x-3 
              text-[#0A1E2B] 
              hover:text-green-600 
              transition-colors 
              group
              active:bg-gray-100
              focus:outline-none
            "
          >
            <FaWhatsapp className="text-2xl group-hover:text-green-600" />
            <span className="font-medium">WhatsApp</span>
          </button>
          
          <div className="w-full h-px bg-gray-200"></div>
          
          <button 
            onClick={openModal}
            className="
              flex 
              items-center 
              space-x-3 
              text-[#0A1E2B] 
              hover:text-blue-600 
              transition-colors 
              group
              active:bg-gray-100
              focus:outline-none
            "
          >
            <FaEnvelope className="text-2xl group-hover:text-blue-600" />
            <span className="font-medium">Email</span>
          </button>
        </div>
      )}

      {/* Main Button */}
      <div 
        ref={buttonRef}
        className="
          flex 
          items-center 
          space-x-3 
          bg-[#0A1E2B] 
          text-white 
          rounded-full 
          shadow-2xl 
          hover:bg-green-600 
          transition-all 
          duration-300 
          cursor-pointer
          group
          active:scale-95
        "
        onClick={handleButtonClick}
        // Gunakan event handler khusus untuk sentuhan
        onTouchStart={handleTouchStart}
        onTouchEnd={handleButtonClick}
      >
        <div 
          className="
            p-4 
            rounded-full 
            flex 
            items-center 
            justify-center
          "
        >
          <FaWhatsapp className="text-3xl" />
        </div>
        {isExpanded && !isMobile && (
          <div className="pr-4 font-medium">
            Hubungi Kami
          </div>
        )}
      </div>
      
      {/* Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default FloatingWhatsAppButton;
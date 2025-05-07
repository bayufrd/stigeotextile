"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { addressData } from '../data/addressData';
import ContactModal from '../components/ContactModal';

const FloatingWhatsAppButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Menambahkan class pada body saat modal terbuka untuk membuat background gelap
  useEffect(() => {
    if (isModalOpen) {
      // Menambahkan class pada body atau menambahkan overlay gelap
      document.body.style.overflow = 'hidden';
      // Membuat elemen overlay jika belum ada
      if (!document.getElementById('modal-overlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'modal-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 1)'; // Full black
        overlay.style.zIndex = '40'; // Pastikan z-index lebih rendah dari modal
        document.body.appendChild(overlay);
      }
    } else {
      // Menghapus class dan overlay saat modal ditutup
      document.body.style.overflow = '';
      const overlay = document.getElementById('modal-overlay');
      if (overlay) {
        document.body.removeChild(overlay);
      }
    }

    // Cleanup function untuk memastikan overlay dihapus saat komponen unmount
    return () => {
      document.body.style.overflow = '';
      const overlay = document.getElementById('modal-overlay');
      if (overlay) {
        document.body.removeChild(overlay);
      }
    };
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="fixed bottom-3 right-3 flex items-center space-x-2 z-50">
      {/* "Contact Us" Text Block with Green Background and White Text */}
      <div 
        className="border-2 border-[#0A1E2B] bg-[#0A1E2B] hover:bg-green-600 text-white p-2 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
        onClick={openModal}
      >
        Contact Us
      </div>

      {/* WhatsApp Button */}
      <div
        onClick={openModal} // Menggunakan div untuk membuka modal
        className="bg-[#0A1E2B] text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </div>
      
      {/* Modal Called - meningkatkan z-index untuk memastikan muncul di atas overlay */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default FloatingWhatsAppButton;
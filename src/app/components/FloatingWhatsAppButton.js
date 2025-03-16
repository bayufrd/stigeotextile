"use client";

import Link from "next/link";

const FloatingWhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/851-8311-1385"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-3 right-3 bg-[#2BB673] text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </Link>
  );
};

export default FloatingWhatsAppButton;

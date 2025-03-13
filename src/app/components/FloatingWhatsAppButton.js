"use client";

import Link from "next/link";

const FloatingWhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/851-8311-1385"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
    >
      <i className="fab fa-whatsapp text-xl"></i>
    </Link>
  );
};

export default FloatingWhatsAppButton;

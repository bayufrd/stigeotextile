"use client";

import { useState } from "react";

const FloatingWhatsAppButton = () => {
  const [position, setPosition] = useState({
    bottom: '3rem',
    right: '3rem',
  });

  // Function to generate random position within the viewport
  const getRandomPosition = () => {
    const randomBottom = `${Math.floor(Math.random() * 60)}rem`; // Random bottom between 0 and 60rem
    const randomRight = `${Math.floor(Math.random() * 60)}rem`; // Random right between 0 and 60rem
    setPosition({
      bottom: randomBottom,
      right: randomRight,
    });
  };

  return (
    <div
      className="fixed"
      style={{ bottom: position.bottom, right: position.right }}
      onClick={getRandomPosition} // Change position on click
    >
      {/* WhatsApp Button */}
      <div
        className="bg-[#2BB673] text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
        style={{ cursor: 'pointer' }} // Ensure the cursor is not obstructed
        onClick={getRandomPosition} // Change position on click
      >
        <i className="fab fa-whatsapp text-4xl"></i>
      </div>
    </div>
  );
};

export default FloatingWhatsAppButton;

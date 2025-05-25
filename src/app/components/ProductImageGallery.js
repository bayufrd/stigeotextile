"use client";
import Image from "next/image";
import { useState } from "react";

const ProductImageGallery = ({ images, productName }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasImages = images && images.length > 0;

  return (
    <>
      <div className="relative w-[300px] h-[300px] mb-4 shadow-lg border border-gray-300 rounded-xl">
        <Image
          src={hasImages ? images[currentImageIndex] : "/no-image.jpg"}
          alt={productName || "Product image"}
          width={600}
          height={600}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="flex space-x-2">
        {images && images.map((img, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentImageIndex(index)}
            className={`w-5 h-5 border rounded-full ${
              currentImageIndex === index 
                ? 'border-[#0A1E2B] bg-[#0A1E2B]' 
                : 'border-gray-300'
            }`}
          >
          </button>
        ))}
      </div>
    </>
  );
};

export default ProductImageGallery;
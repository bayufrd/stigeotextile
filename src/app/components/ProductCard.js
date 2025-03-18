// app/components/ProductCard.js
"use client";

import Image from "next/image";
import { useState } from "react";

const ProductCard = ({ images, name, description, details, specs }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative flex border rounded-2xl p-4 shadow-md w-full">
        {/* Image Slider */}
        <div className="w-1/2 flex items-center justify-center border-r pb-12 pr-10 pl-6 pt-6 relative">
            <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black rounded-full z-10"
            >
            <i className="fa-solid fa-circle-left text-xl" />
            </button>

            <div className="relative w-[560px] h-[480px] rounded-xl shadow-xl">
                <Image
                    src={images[currentImageIndex]}
                    alt={name}
                    width={560}
                    height={480}
                    className="w-full h-full object-cover rounded-lg"
                    priority
                />
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm">
                {currentImageIndex + 1} / {images.length}
            </div>

            <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-black rounded-full z-10"
            >
            <i className="fa-solid fa-circle-right text-xl" />
            </button>
        </div>

        {/* Product Details */}
        <div className="w-1/2 p-4 space-y-2">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-700">{description}</p>
            {details && <p className="text-sm text-gray-500">{details}</p>}
            <p className="text-sm font-medium text-gray-900">{specs}</p>
        </div>
        </div>
    );
};

export default ProductCard;

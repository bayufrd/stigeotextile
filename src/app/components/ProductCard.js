"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { slugify } from "@/utils/slugify";

const ProductCard = ({ images, name, category, description, details, specs, slug_category, slug_product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const hasImages = images.length > 0;
    const categorySlug = slug_category ? slug_category : slugify(category) || "uncategorized";
    const productSlug = slug_product ? slug_product : slugify(name);

    return (
        <div className="flex flex-col items-center justify-center py-10 px-6">
            <h2 className="text-2xl font-semibold mb-4">{name}</h2>
            <p className="text-gray-600 text-center mb-6">{description}</p>
            
            <div className="flex items-center w-full max-w-4xl">
                {/* Left Section (Details) */}
                <div className="w-1/3 space-y-6 text-right pr-4">
                    <h3 className="text-lg font-medium text-blue-600">Category</h3>
                    <p className="text-gray-600 text-sm">{category}</p>
                    <h3 className="text-lg font-medium text-blue-600">Specifications</h3>
                    <p className="text-gray-600 text-sm">{specs}</p>
                </div>
                
                {/* Product Image */}
                <div className="w-1/3 flex flex-col items-center">
                    <div className="relative w-48 h-48 mb-4">
                        <Image
                            src={hasImages ? images[currentImageIndex] : "/no-image.jpg"}
                            alt={name}
                            width={192}
                            height={192}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex space-x-2">
                        {images.map((img, index) => (
                            <button key={index} onClick={() => setCurrentImageIndex(index)}
                                className={`w-6 h-6 border rounded-full ${currentImageIndex === index ? 'border-blue-600' : 'border-gray-300'}`}></button>
                        ))}
                    </div>
                </div>
                
                {/* Right Section (Details) */}
                <div className="w-1/3 space-y-6 text-left pl-4">
                    <h3 className="text-lg font-medium text-blue-600">Details</h3>
                    <p className="text-gray-600 text-sm">{details || "No additional details available."}</p>
                    <Link href={`/${categorySlug}/${productSlug}`} className="text-blue-600 underline">View Product</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { slugify } from "@/utils/slugify";

const ProductCard = ({ images, name, description, details, specs, category, slug_category, slug_product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const categorySlug = slug_category ? slug_category : slugify(category) || "uncategorized";
    const productSlug = slug_product ? slug_product : slugify(name);

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative flex border rounded-2xl p-4 shadow-md w-full">
            {/* Image Slider */}
            <div className="w-1/2 flex items-center justify-center border-r pb-10 pr-10 pl-6 pt-6 relative">
                <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black rounded-full z-10"
                >
                <i className="fa-solid fa-circle-left text-xl" />
                </button>

                <div className="relative w-[500px] h-[480px] rounded-xl shadow-xl">
                    <Image
                        src={images.length > 0 ? images[currentImageIndex] : "/no-image.jpg"}
                        alt={name}
                        width={560}
                        height={480}
                        className="w-full h-full object-cover rounded-lg"
                        priority
                    />
                </div>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm">
                    {images.length > 0 ? `${currentImageIndex + 1} / ${images.length}` : "No Image"}
                </div>

                <button
                    onClick={nextImage}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 text-black rounded-full z-10"
                >
                <i className="fa-solid fa-circle-right text-xl" />
                </button>
            </div>

            {/* Product Details */}
            <div className="w-1/2 pr-2 pl-4 pb-4 flex flex-col justify-between">
                <div className="space-y-4">
                    <h2 className="text-xl text-center font-semibold border-b-2 shadow-lg pb-2">{name}</h2>
                    <p className="text-gray-700">{description}</p>
                    {details && <p className="text-sm text-gray-500">{details}</p>}
                    <p className="text-sm font-medium text-gray-900">{specs}</p>
                </div>
                {/* Button detail */}
                <div>
                    <Link
                        href={`/${categorySlug}/${productSlug}`}
                        className="flex justify-center bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Detail Produk
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

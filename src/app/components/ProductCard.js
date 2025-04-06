"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { slugify } from "@/utils/slugify";

const ProductCard = ({ images, name, description, applications, detail_title, details, slug_category, slug_product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const hasImages = images.length > 0;
    const categorySlug = slug_category ? slug_category : "uncategorized";
    const productSlug = slug_product ? slug_product : slugify(name);    

    return (
        <div className="flex flex-col items-center justify-center py-10 border-b last:border-b-0">
            <h2 className="text-3xl font-semibold mb-4">{name}</h2>
            <p className="w-2/3 text-gray-600 pb-8 text-justify">{description}</p>
            
            <div className="flex items-center w-full">
                {/* Left Section (Details) */}
                <div className="relative h-full w-1/3 text-right pr-4">
                    <div className="absolute -inset-x-2 w-full h-[70%] bg-[url('/products/assets/leftside-product-bg.svg')] bg-cover bg-center opacity-25"></div>
                    <div className="z-10 space-y-3 font-bold flex flex-col justify-center h-full">
                        <h3 className="text-2xl text-amber-300">Aplikasi Produk:</h3>
                        <ul className="text-gray-600 text-l list-none pr-2">
                            {applications.map((application, index) => (
                                <li key={index} className="flex justify-end space-y-3 gap-x-4">
                                    <span>{application}</span>
                                    <span>•</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                {/* Product Image */}
                <div className="w-1/3 flex flex-col items-center">
                    <div className="relative w-[500px] h-[500px] mb-4 shadow-lg border border-gray-300 rounded-xl">
                        <Image
                            src={hasImages ? images[currentImageIndex] : "/no-image.jpg"}
                            alt={name}
                            width={500}
                            height={500}
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                    <div className="flex space-x-2">
                        {images.map((img, index) => (
                            <button key={index} onClick={() => setCurrentImageIndex(index)}
                                className={`w-5 h-5 border rounded-full ${currentImageIndex === index ? 'border-[#0A1E2B] bg-[#0A1E2B]' : 'border-gray-300'}`}></button>
                        ))}
                    </div>
                </div>
                
                {/* Right Section (Details) */}
                <div className="w-1/3 gap-6 flex pl-4 flex-col justify-evenly">
                    {details.length > 0 && (
                        <div className="relative h-full">
                            <div className="absolute -inset-y-20 w-full h-[150%] bg-[url('/products/assets/rightside-product-bg.svg')] bg-cover bg-center opacity-20"></div>
                            <div className="z-10 text-left space-y-3 font-bold h-full flex flex-col">
                                <h3 className="text-2xl text-blue-600">Detail Produk:</h3>
                                <div className="space-y-2">
                                    <p className="text-gray-600 text-l text-justify">{detail_title || "No additional details available."}</p>
                                    <ul className="text-gray-600 text-l list-none p-2">
                                        {details.map((detail, index) => (
                                            <li key={index} className="flex justify-start space-y-3 gap-x-4">
                                                <span>•</span>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="flex gap-4 z-10">
                        <div className=""><i className="fa-regular fa-hand-point-right text-3xl"></i></div>
                        <Link href={`/${categorySlug}/${productSlug}`} className="text-xl text-blue-600 underline">View Product</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

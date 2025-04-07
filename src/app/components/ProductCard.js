"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { slugify } from "@/utils/slugify";

const ProductCard = ({ images, name, description, applications, detail_title, details, slug_category, slug_product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentContentIndex, setCurrentContentIndex] = useState(0);
    const hasImages = images.length > 0;
    const categorySlug = slug_category ? slug_category : "uncategorized";
    const productSlug = slug_product ? slug_product : slugify(name);    

    const touchStartXImg = useRef(null);
    const touchEndXImg = useRef(null);
    const touchStartXContent = useRef(null);
    const touchEndXContent = useRef(null);

    // Swipe handler for images
    const handleTouchStartImg = (e) => {
        touchStartXImg.current = e.touches[0].clientX;
    };
    const handleTouchEndImg = () => {
        const distance = touchStartXImg.current - touchEndXImg.current;
        if (distance > 50 && currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        } else if (distance < -50 && currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };
    const handleTouchMoveImg = (e) => {
        touchEndXImg.current = e.touches[0].clientX;
    };

    // Swipe handler for content
    const handleTouchStartContent = (e) => {
        touchStartXContent.current = e.touches[0].clientX;
    };
    const handleTouchMoveContent = (e) => {
        touchEndXContent.current = e.touches[0].clientX;
    };
    const handleTouchEndContent = () => {
        const distance = touchStartXContent.current - touchEndXContent.current;
        if (distance > 50 && currentContentIndex < 1) {
            setCurrentContentIndex(currentContentIndex + 1);
        } else if (distance < -50 && currentContentIndex > 0) {
            setCurrentContentIndex(currentContentIndex - 1);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center my-10 pb-10 border-b last:border-b-0">
        <h2 className="text-title text-center font-semibold mb-4">{name}</h2>
        <p className="w-2/3 text-gray-600 pb-8 text-justify">{description}</p>

        {/* Wrapper Responsif */}
        <div className="flex flex-col lg:flex-row w-full items-center lg:items-start gap-4">

            {/* Mobile: Image dulu */}
            <div className="lg:hidden w-full flex flex-col items-center">
            <div className="relative w-[350px] h-[350px] mb-4 shadow-lg border border-gray-300 rounded-xl"
                onTouchStart={handleTouchStartImg}
                onTouchMove={handleTouchMoveImg}
                onTouchEnd={handleTouchEndImg}
            >
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
                    className={`w-5 h-5 border rounded-full ${currentImageIndex === index ? 'border-[#0A1E2B] bg-[#0A1E2B]' : 'border-gray-300'}`}>
                </button>
                ))}
            </div>
            </div>

            {/* Mobile: Left & Right jadi slider */}
            <div className="lg:hidden w-full relative"
                onTouchStart={handleTouchStartContent}
                onTouchMove={handleTouchMoveContent}
                onTouchEnd={handleTouchEndContent}
            >
                <div className="overflow-hidden">
                    <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentContentIndex * 100}%)` }}
                    >
                    {/* Left Slide */}
                    <div className="w-full shrink-0">
                        <div className="relative text-right pr-4 p-4 bg-white rounded shadow-md min-h-[420px] flex flex-col justify-between">
                        <div className="absolute -inset-x-2 w-full h-[70%] bg-[url('/products/assets/leftside-product-bg.svg')] bg-cover bg-center opacity-25 z-0"></div>
                        <div className="relative z-10 space-y-3 font-bold flex flex-col justify-center">
                            <h3 className="text-subtitle text-amber-300">Aplikasi Produk:</h3>
                            <ul className="text-gray-600 text-body list-none pr-2">
                                {applications.map((application, index) => (
                                    <li key={index} className="flex justify-end gap-x-4">
                                    <span>{application}</span>
                                    <span>•</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        </div>
                    </div>

                    {/* Right Slide */}
                    <div className="w-full shrink-0">
                        <div className="relative pl-4 p-4 bg-white rounded shadow-md min-h-[420px] flex flex-col justify-between">
                        <div className="relative z-10 space-y-3 font-bold">
                            <h3 className="text-subtitle text-blue-600">Detail Produk:</h3>
                            <p className="text-gray-600 text-body text-justify">
                                {detail_title || "No additional details available."}
                            </p>
                            <ul className="text-gray-600 text-body list-none p-2">
                                {details.map((detail, index) => (
                                    <li key={index} className="flex justify-start gap-x-4">
                                    <span>•</span>
                                    <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex gap-4 mt-4">
                            <i className="fa-regular fa-hand-point-right text-3xl"></i>
                            <Link
                                href={`/${categorySlug}/${productSlug}`}
                                className="text-xl text-blue-600 underline"
                            >
                                View Product
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tombol navigasi */}
            <div className="flex justify-between mt-4 px-4">
                <button
                className="text-sm bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
                onClick={() => setCurrentContentIndex((prev) => Math.max(prev - 1, 0))}
                disabled={currentContentIndex === 0}
                >
                ← Aplikasi
                </button>
                <button
                className="text-sm bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
                onClick={() => setCurrentContentIndex((prev) => Math.min(prev + 1, 1))}
                disabled={currentContentIndex === 1}
                >
                Detail →
                </button>
            </div>
            </div>


            {/* Desktop View */}
            <div className="hidden lg:flex items-center w-full">
            {/* Left Section */}
            <div className="relative h-full w-1/3 text-right pr-4">
                <div className="absolute -inset-x-2 w-full h-[70%] bg-[url('/products/assets/leftside-product-bg.svg')] bg-cover bg-center opacity-25 z-0"></div>
                <div className="z-10 space-y-3 font-bold flex flex-col justify-center h-full">
                <h3 className="text-title text-amber-300">Aplikasi Produk:</h3>
                <ul className="text-gray-600 text-body list-none pr-2">
                    {applications.map((application, index) => (
                    <li key={index} className="flex justify-end space-y-3 gap-x-4">
                        <span>{application}</span>
                        <span>•</span>
                    </li>
                    ))}
                </ul>
                </div>
            </div>

            {/* Image */}
            <div className="w-1/3 flex flex-col items-center">
                <div className="relative w-[300px] h-[300px] mb-4 shadow-lg border border-gray-300 rounded-xl">
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
                    className={`w-5 h-5 border rounded-full ${currentImageIndex === index ? 'border-[#0A1E2B] bg-[#0A1E2B]' : 'border-gray-300'}`}>
                    </button>
                ))}
                </div>
            </div>

            {/* Right Section */}
            <div className="w-1/3 gap-6 flex pl-4 flex-col justify-evenly">
                {details.length > 0 && (
                <div className="relative h-full">
                    <div className="absolute -inset-y-20 w-full h-[150%] bg-[url('/products/assets/rightside-product-bg.svg')] bg-cover bg-center opacity-20 z-0"></div>
                    <div className="z-10 text-left space-y-3 font-bold h-full flex flex-col">
                    <h3 className="text-title text-blue-600">Detail Produk:</h3>
                    <div className="space-y-2">
                        <p className="text-gray-600 text-body text-justify">{detail_title || "No additional details available."}</p>
                        <ul className="text-gray-600 text-body list-none p-2">
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
                <div><i className="fa-regular fa-hand-point-right text-3xl"></i></div>
                    <Link href={`/${categorySlug}/${productSlug}`} className="text-xl text-blue-600 underline">View Product</Link>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
};

export default ProductCard;

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { products } from '../data/products';
import data from '/public/data.json';

const Hero = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentProductSlide, setCurrentProductSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const slides = data.heroSlides;

    // Handle scroll behavior when modal is open  
    useEffect(() => {
        document.body.style.overflow = showModal ? 'hidden' : '';
    }, [showModal]);

    // Auto slide effect for hero section  
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    // Check mobile device
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const handleSlideChange = (direction) => {
        const totalImages = products[0].images.length;
        if (direction === 'next') {
            setCurrentProductSlide((prev) => (prev + 1) % totalImages);
        } else {
            setCurrentProductSlide((prev) => (prev - 1 + totalImages) % totalImages);
        }
    };

    return (
        <div className="bg-white relative">
            <Head>
                <title>About Us - STI</title>
                <meta name="description" content="About Sentra Teknologi Investama" />
            </Head>
            <main>
                {/* Hero Section */}
                <section id="home" className="relative overflow-hidden h-screen">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <Image
                                src={slide}
                                alt={`Hero slide ${index + 1}`}
                                fill
                                style={{ objectFit: "cover", objectPosition: "center" }}
                                priority={index === 0}
                                loading={index === 0 ? "eager" : "lazy"}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                        </div>
                    ))}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-center text-white z-20">
                        <h1 className="text-4xl md:text-5xl font-bold">{products[0]?.name}</h1>
                        <p className="mt-2">{products[0]?.description.slice(0, 150)}...</p>
                        <button
                            className="mt-4 px-6 py-2 rounded-lg bg-gray-900 hover:bg-opacity-90 transition cursor-pointer"
                            onClick={openModal}
                        >
                            BACA DETAIL
                        </button>
                    </div>
                </section>

                {/* Modal for Detailed View */}
                {showModal && (
                    <div className="fixed inset-0 flex justify-center items-center z-50 p-4 pt-16">
                        <div
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={closeModal}
                        />
                        <div className="relative w-full max-w-5xl h-[85vh] bg-white rounded-xl shadow-2xl overflow-hidden flex">
                            {/* Image Section */}
                            <div className="w-1/2 relative border-r border-gray-200">
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="bg-[#1F3D57] text-white px-3 py-1 rounded-full text-sm">
                                        {products[0].category || "Geotextile"}
                                    </span>
                                </div>

                                {/* Image Slider */}
                                <div className="relative w-full h-full overflow-hidden">
                                    <div
                                        className="flex h-full transition-transform duration-300"
                                        style={{ transform: `translateX(-${currentProductSlide * 100}%)` }}
                                    >
                                        {products[0].images.map((image, index) => (
                                            <div
                                                key={index}
                                                className="min-w-full h-full flex items-center justify-center cursor-zoom-in px-4 py-4"
                                            >
                                                <div className="w-full h-full bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
                                                    <img
                                                        src={image}
                                                        alt={`${products[0].name} - Image ${index + 1}`}
                                                        className="max-w-full max-h-full object-contain"
                                                        onClick={() => {
                                                            const fullScreenImage = window.open('', '_blank');
                                                            fullScreenImage.document.write(`
                                                                <html>
                                                                    <head>
                                                                        <title>${products[0].name} - Image ${index + 1}</title>
                                                                        <style>
                                                                            body {
                                                                                margin: 0;
                                                                                display: flex;
                                                                                justify-content: center;
                                                                                align-items: center;
                                                                                height: 100vh;
                                                                                background: rgba(0,0,0,0.9);
                                                                            }
                                                                            img {
                                                                                max-width: 95%;
                                                                                max-height: 95%;
                                                                                object-fit: contain;
                                                                            }
                                                                        </style>
                                                                    </head>
                                                                    <body>
                                                                        <img src="${image}" alt="${products[0].name} - Image ${index + 1}">
                                                                    </body>
                                                                </html>
                                                            `);
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Navigation Buttons */}
                                    {products[0].images.length > 1 && (
                                        <>
                                            <button
                                                onClick={() => handleSlideChange('prev')}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => handleSlideChange('next')}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </>
                                    )}

                                    {/* Indicator */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                                        {products[0].images.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`w-2 h-2 rounded-full ${currentProductSlide === index ? 'bg-[#1F3D57]' : 'bg-gray-300'}`}
                                                onClick={() => setCurrentProductSlide(index)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Details Section */}
                            <div className="w-1/2 p-8 overflow-y-auto">
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 text-gray-600 hover:text-black"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <h2 className="text-3xl font-bold mb-4">{products[0].name}</h2>
                                <p className="text-gray-600 mb-6">{products[0].description}</p>

                                {/* Applications */}
                                {products[0].applications && products[0].applications.length > 0 && (
                                    <div className="border-b pb-4">
                                        <h3 className="text-xl font-semibold mb-3">Aplikasi</h3>
                                        <ul className="space-y-2 text-gray-600">
                                            {products[0].applications.map((app, index) => (
                                                <li key={index} className="flex items-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 mr-2 text-[#1F3D57]"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    {app}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Specifications Image */}
                                {products[0].specs && (
                                    <div>
                                        <h3 className="text-xl font-semibold mb-3">Spesifikasi</h3>
                                        <img
                                            src={products[0].specs}
                                            alt="Product Specifications"
                                            className="w-full rounded-lg shadow-md cursor-zoom-in"
                                            onClick={() => {
                                                const fullScreenImage = window.open('', '_blank');
                                                fullScreenImage.document.write(`
                                                    <html>
                                                        <head>
                                                            <title>Spesifikasi ${products[0].name}</title>
                                                            <style>
                                                                body { 
                                                                    margin: 0; 
                                                                    display: flex; 
                                                                    justify-content: center; 
                                                                    align-items: center; 
                                                                    height: 100vh; 
                                                                    background: rgba(0,0,0,0.9);
                                                                }
                                                                img { 
                                                                    max-width: 95%; 
                                                                    max-height: 95%; 
                                                                    object-fit: contain; 
                                                                }
                                                            </style>
                                                        </head>
                                                        <body>
                                                            <img src="${products[0].specs}" alt="Spesifikasi ${products[0].name}">
                                                        </body>
                                                    </html>
                                                `);
                                            }}
                                        />
                                    </div>
                                )}


                            </div>
                        </div>
                    </div>
                )}
                {/* Mobile Version */}
                {showModal && isMobile && (
                    <div className="fixed inset-0 z-50 bg-white overflow-y-auto pt-16">
                        {/* Image Carousel */}
                        <div className="relative w-full overflow-hidden">
                            <div
                                className="flex transition-transform duration-300"
                                style={{ transform: `translateX(-${currentProductSlide * 100}%)` }}
                            >
                                {products[0].images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="w-full flex-shrink-0 flex justify-center items-center cursor-zoom-in 
                        rounded-lg shadow-md overflow-hidden"
                                        onClick={() => {
                                            const fullScreenImage = window.open('', '_blank');
                                            fullScreenImage.document.write(`  
                            <html>  
                                <head>  
                                    <title>${products[0].name} - Image ${index + 1}</title>  
                                    <style>  
                                        body {   
                                            margin: 0;   
                                            display: flex;   
                                            justify-content: center;   
                                            align-items: center;   
                                            height: 100vh;   
                                            background: rgba(0,0,0,0.9);  
                                        }  
                                        img {   
                                            max-width: 95%;   
                                            max-height: 95%;   
                                            object-fit: contain;   
                                        }  
                                    </style>  
                                </head>  
                                <body>  
                                    <img src="${image}" alt="${products[0].name} - Image ${index + 1}">  
                                </body>  
                            </html>  
                        `);
                                        }}
                                    >
                                        <img
                                            src={image}
                                            alt={`${products[0].name} - Image ${index + 1}`}
                                            className="w-full max-h-[50vh] object-contain"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Buttons */}
                            {products[0].images.length > 1 && (
                                <>
                                    <button
                                        onClick={() => handleSlideChange('prev')}
                                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => handleSlideChange('next')}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </>
                            )}

                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-gray-600 hover:text-black z-10 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Indicator */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                                {products[0].images.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`w-2 h-2 rounded-full ${currentProductSlide === index ? 'bg-[#1F3D57]' : 'bg-gray-300'}`}
                                        onClick={() => setCurrentProductSlide(index)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Details Section */}
                        <div className="p-4">
                            <div className="bg-[#1F3D57] text-white px-3 py-1 rounded-full text-sm inline-block mb-4">
                                {products[0].category || "Geotextile"}
                            </div>

                            <h2 className="text-2xl font-bold mb-4">{products[0].name}</h2>
                            <p className="text-gray-600 mb-6">{products[0].description}</p>

                            {/* Applications */}
                            {products[0].applications && products[0].applications.length > 0 && (
                                <div className="border-b pb-4 mb-4">
                                    <h3 className="text-xl font-semibold mb-3">Aplikasi</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        {products[0].applications.map((app, index) => (
                                            <li key={index} className="flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 mr-2 text-[#1F3D57]"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                {app}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Details */}
                            {products[0].details && products[0].details.length > 0 && (
                                <div className="border-b pb-4 mb-4">
                                    <h3 className="text-xl font-semibold mb-3">
                                        {products[0].detail_title || "Detail Produk"}
                                    </h3>
                                    <ul className="space-y-2 text-gray-600">
                                        {products[0].details.map((detail, index) => (
                                            <li key={index} className="flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 mr-2 text-[#1F3D57]"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Specifications Image */}
                            {products[0].specs && (
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Spesifikasi</h3>
                                    <img
                                        src={products[0].specs}
                                        alt="Product Specifications"
                                        className="w-full rounded-lg shadow-md cursor-zoom-in"
                                        onClick={() => {
                                            const fullScreenImage = window.open('', '_blank');
                                            fullScreenImage.document.write(`
                                <html>
                                    <head>
                                        <title>Spesifikasi ${products[0].name}</title>
                                        <style>
                                            body { 
                                                margin: 0; 
                                                display: flex; 
                                                justify-content: center; 
                                                align-items: center; 
                                                height: 100vh; 
                                                background: rgba(0,0,0,0.9);
                                            }
                                            img { 
                                                max-width: 95%; 
                                                max-height: 95%; 
                                                object-fit: contain; 
                                            }
                                        </style>
                                    </head>
                                    <body>
                                        <img src="${products[0].specs}" alt="Spesifikasi ${products[0].name}">
                                    </body>
                                </html>
                            `);
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Hero;
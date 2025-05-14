'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';  // Import Head from 'next/head'
import { products } from '../data/products';  // Import the products array


const Hero = () => {
    const [showModal, setShowModal] = useState(false);
    const [isImageFullScreen, setIsImageFullScreen] = useState(false); // State for zoom/full-screen


    // Add overlay and disable body scroll when modal is open
    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden'; // Disable scrolling

            // Create overlay if not already present
            if (!document.getElementById('modal-overlay')) {
                const overlay = document.createElement('div');
                overlay.id = 'modal-overlay';
                overlay.style.position = 'fixed';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.width = '100%';
                overlay.style.height = '100%';
                overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Dark semi-transparent background
                overlay.style.zIndex = '30'; // Ensure overlay is behind modal
                overlay.style.pointerEvents = 'none'; // Ensure it doesn't block interactions with modal
                document.body.appendChild(overlay);
            }
        } else {
            document.body.style.overflow = ''; // Enable scrolling
            const overlay = document.getElementById('modal-overlay');
            if (overlay) {
                document.body.removeChild(overlay);
            }
        }

        return () => {
            // Cleanup if component is unmounted or modal is closed
            document.body.style.overflow = '';
            const overlay = document.getElementById('modal-overlay');
            if (overlay) {
                document.body.removeChild(overlay);
            }
        };
    }, [showModal]);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const toggleImageZoom = () => {
        setIsImageFullScreen((prev) => !prev);
    };

    // State to track current slide
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/displayAbout/about-product1.jpg",
        "/displayAbout/about-product2.jpg"
    ];

    // State for Sentra Collection carousel
    const [currentProductSlide, setCurrentProductSlide] = useState(0);
    const totalSlides = 5; // Total slides in the collection

    // Auto slide effect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, []);

    // Auto slide effect for product collection
    useEffect(() => {
        const productTimer = setInterval(() => {
            setCurrentProductSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
        }, 5000); // Change slide every 5 seconds for Sentra Collection

        return () => clearInterval(productTimer);
    }, [currentProductSlide]);

    return (
        <div className="bg-gray-100">
            <Head>
                <title>About Us - STI</title>
                <meta name="description" content="About Sentra Teknologi Investama" />
                <link rel="icon" href="../../public/logo/logo.ico" />
            </Head>

            {/* Main Content */}
            <main>
                {/* Hero Product Section with Slider */}
                <section id="home" className="bg-white w-full">
                    <div className="w-full relative overflow-hidden" style={{ height: "min(450px, 60vh)" }}>
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                            >
                                <Image
                                    src={slide}
                                    alt={`Hero slide ${index + 1}`}
                                    fill
                                    style={{ objectFit: "cover", objectPosition: "center" }}
                                    priority={index === 0} // Prioritas untuk slide pertama
                                    loading={index === 0 ? "eager" : "lazy"} // Eager loading untuk slide pertama, lazy untuk lainnya
                                />
                                {/* Dark Overlay */}
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-20"></div>
                            </div>
                        ))}
                        {/* Text and Button Section */}
                        <div className="absolute top-0 right-0 p-4 md:p-8 z-20 mt-4 md:mt-10 mr-2 md:mr-4 text-right max-w-full md:max-w-[60%]">
                            <h1 className="text-title text-white mb-2 md:mb-4">
                                {products[0].name}  {/* Displaying the name of the first product */}
                            </h1>
                            <p className="text-subtitle text-white mb-4 md:mb-6">
                                {products[0].description.length > 300
                                    ? products[0].description.slice(0, 300) + "..."  // Truncate description if it's too long
                                    : products[0].description}
                            </p>
                            <button className="text-white px-4 py-1 md:px-6 md:py-2 rounded-full opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
                                style={{ backgroundColor: "rgba(1, 2, 3, 0.9)" }}
                                onClick={openModal}
                            >
                                <span className="font-bold text-body">LOOK MORE</span>
                            </button>

                        </div>
                        {/* Modal for Detailed View */}
                        {showModal && (
                            <div className="fixed inset-0 flex justify-center items-center z-50">
                                {/* Overlay that closes modal when clicked */}
                                <div
                                    className="absolute inset-0 bg-gray-800 bg-opacity-50"
                                    onClick={closeModal}
                                />
                                <div className="bg-white p-8 rounded-lg w-3/4 md:w-1/2 relative max-h-[80vh] overflow-y-auto z-10">
                                    {/* Close Button */}
                                    <button
                                        className="absolute top-4 right-4 text-black text-2xl"
                                        onClick={closeModal}
                                        style={{
                                            zIndex: 100, // Ensure it is above other elements
                                            cursor: 'pointer',
                                        }}
                                    >
                                        &times;
                                    </button>
                                    <div className="relative">
                                        {/* Image */}
                                        <img
                                            src={products[0].images && products[0].images.length > 0 ? products[0].images[0] : '/no-image.jpg'}
                                            alt={products[0].name}
                                            className={`w-full relative h-[48vh] md:h-[40vh] sm:h-[30vh] object-cover rounded-md mb-4 cursor-pointer transition-all duration-500 ${isImageFullScreen ? 'transform scale-150' : ''}`}
                                            onClick={toggleImageZoom} // Toggle zoom on click
                                        />
                                        {/* Product Details */}
                                        <div className="mt-4">
                                            <h2 className="text-2xl font-semibold">{products[0].name}</h2>
                                            <p className="text-gray-500 mt-4">{products[0].description}</p>
                                            {/* List of Applications */}
                                            <ul className="text-gray-500 list-none p-2 mt-4"> {/* Adding a margin-top for spacing */}
                                                {products[0].applications && products[0].applications.length > 0 ? (
                                                    products[0].applications.map((application, index) => (
                                                        <li key={index} className="flex justify-start gap-x-4">
                                                            <span>•</span>
                                                            <span>{application}</span>
                                                        </li>
                                                    ))
                                                ) : (
                                                    <li className="text-gray-500">

                                                    </li> // Default text if no applications
                                                )}
                                            </ul>
                                            <div className="mt-4">
                                                <span className="text-lg text-gray-600 block">
                                                    <strong>{products[0].detail_title || " "}</strong>
                                                </span>
                                                {/* List of Product Details */}
                                                <ul className="text-gray-500 list-none p-2">
                                                    {products[0].details && products[0].details.length > 0 ? (
                                                        products[0].details.map((detail, index) => (
                                                            <li key={index} className="flex justify-start gap-x-4">
                                                                <span>•</span>
                                                                <span>{detail}</span>
                                                            </li>
                                                        ))
                                                    ) : (
                                                        <li className="text-gray-500">

                                                        </li>
                                                    )}
                                                </ul>
                                                {/* Image for Specifications */}
                                                {products[0].specs && (
                                                    <div className="mt-4">
                                                        <img
                                                            src={products[0].specs}
                                                            alt="Product Specs"
                                                            className={`w-full h-auto object-cover rounded-md cursor-pointer ${isImageFullScreen ? 'transform scale-150' : ''}`}
                                                            onClick={toggleImageZoom} // Toggle zoom on click
                                                        />
                                                    </div>
                                                )}
                                                <span className="text-lg text-[#1F3D57] block mt-2">
                                                    Category: <strong>{products[0].category || "Geotextile"}</strong>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Slider indicators */}
                        <div className="absolute bottom-4 md:bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>

    );
};

export default Hero; 

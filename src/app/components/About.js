'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';  // Import Head from 'next/head'
import { aboutData } from '../data/aboutData';


const About = () => {
    // State to track current slide
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/displayAbout/about-product1.jpg",
        "/displayAbout/about-product2.jpg"
    ];
    // State to track whether to show more content or not
    const [showMore, setShowMore] = useState(false);

    const handleShowMoreClick = () => {
        setShowMore(prevState => !prevState); // Toggle the visibility
    };
    // State for Sentra Collection carousel
    const [currentProductSlide, setCurrentProductSlide] = useState(0);
    const totalSlides = 5; // Total slides in the collection

    // Function to handle slide changes
    const handleSlideChange = (direction) => {
        if (direction === 'next') {
            setCurrentProductSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
        } else {
            setCurrentProductSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
        }
    };

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
                {/* About Us Section */}
                <section id="about" className='py-6'>
                    <div className="text-center text-title mt-0 mb-4">
                        <h1 className="text-black inline">TENTANG</h1>
                        <h1 className="text-[#1F3D57] inline"> KAMI</h1>
                    </div>

                    {/* Baris pertama: Text Section */}
                    <div className="container mx-auto px-4 mb-16">
                        <div className="flex flex-col justify-center items-center">
                            <h3 className="text-subtitle mb-4 text-center">
                                {aboutData.aboutDetail}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="text-body leading-relaxed">
                                    <p className="mb-4">
                                        <span className="font-bold">VISI </span><br />
                                        {aboutData.aboutVisi}<br /><br /><br />
                                        <span className="font-bold">MISI </span><br />
                                        {aboutData.aboutMisi}
                                    </p>
                                </div>
                                <div className="text-body leading-relaxed">
                                    <p className="mb-4">
                                        <span className="font-bold">Apa yang Kami Tawarkan </span><br />
                                        {aboutData.aboutOffers}<br /><br /><br />
                                        <span className="font-bold">Keunggulan Kami </span><br />
                                        {aboutData.aboutAdvantages}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Keunggulan Kami */}
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-8">
                            <h3 className="text-subtitle">Fitur</h3>
                        </div>

                        {/* 6 Kolom untuk Keunggulan Kami */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

                            {/* Point 1: Produk Berkualitas Tinggi */}
                            <div className="flex flex-col items-center mb-6 transform transition-all duration-300 ease-in-out hover:scale-110 hover:text-[#1F3D57]">
                                <i className="fas fa-cogs text-4xl mb-2 w-6 h-6 sm:w-7 sm:h-7 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 mx-auto text-[#1F3D57]"></i>
                                <p className="font-semibold text-[#1F3D57] mt-3 text-body text-center">Produk Berkualitas Tinggi</p>
                            </div>

                            {/* Point 2: Uji Kualitas Berkala */}
                            <div className="flex flex-col items-center mb-6 transform transition-all duration-300 ease-in-out hover:scale-110 hover:text-[#1F3D57]">
                                <i className="fas fa-check-circle text-4xl mb-2 w-6 h-6 sm:w-7 sm:h-7 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 mx-auto text-[#1F3D57]"></i>
                                <p className="font-semibold text-[#1F3D57] mt-3 text-body text-center">Uji Kualitas Berkala</p>
                            </div>

                            {/* Point 3: Jaminan dan Keamanan */}
                            <div className="flex flex-col items-center mb-6 transform transition-all duration-300 ease-in-out hover:scale-110 hover:text-[#1F3D57]">
                                <i className="fas fa-shield-alt text-4xl mb-2 h-6 sm:w-7 sm:h-7 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 mx-auto text-[#1F3D57]"></i>
                                <p className="font-semibold text-[#1F3D57] mt-3 text-body text-center">Jaminan dan Keamanan</p>
                            </div>

                            {/* Point 4: Standar Internasional */}
                            <div className="flex flex-col items-center mb-6 transform transition-all duration-300 ease-in-out hover:scale-110 hover:text-[#1F3D57]">
                                <i className="fas fa-globe-americas text-4xl mb-2 w-6 h-6 sm:w-7 sm:h-7 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 mx-auto text-[#1F3D57]"></i>
                                <p className="font-semibold text-[#1F3D57] mt-3 text-body text-center">Standar Internasional</p>
                            </div>

                            {/* Point 5: Komitmen terhadap Inovasi */}
                            <div className="flex flex-col items-center mb-6 transform transition-all duration-300 ease-in-out hover:scale-110 hover:text-[#1F3D57]">
                                <i className="fas fa-lightbulb text-4xl mb-2 w-6 h-6 sm:w-7 sm:h-7 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 mx-auto text-[#1F3D57]"></i>
                                <p className="font-semibold text-[#1F3D57] mt-3 text-body text-center">Komitmen terhadap Inovasi</p>
                            </div>

                            {/* Point 6: Layanan Pelanggan 24/7 */}
                            <div className="flex flex-col items-center mb-6 transform transition-all duration-300 ease-in-out hover:scale-110 hover:text-[#1F3D57]">
                                <i className="fas fa-headset text-4xl mb-2 w-6 h-6 sm:w-7 h-7 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 mx-auto text-[#1F3D57]"></i>
                                <p className="font-semibold text-[#1F3D57] mt-3 text-body text-center">Layanan Pelanggan 24/7</p>
                            </div>

                        </div>
                    </div>

                </section>
                {/* About Details */}
                <div className="text-body mb-1 text-left px-4 ml-4 md:ml-8 lg:ml-16 xl:ml-32 2xl:ml-64 sm:mr-4 md:mr-8 lg:mr-16 xl:mr-32 2xl:mr-64">
                    {aboutData.aboutMoreDetails.slice(0, showMore ? aboutData.aboutMoreDetails.length : 3).map((paragraph, index) => (
                        paragraph === "" ? (
                            <div key={index} className="h-4"></div>
                        ) : (
                            <p key={index} className="mb-1 mt-4">{paragraph}</p>
                        )
                    ))}

                    {/* Show more/less button */}
                    <button
                        onClick={handleShowMoreClick}
                        className="mt-4 text-blue-600 hover:text-blue-800 cursor-pointer">
                        {showMore ? 'Show Less' : 'Show More'}
                    </button>
                </div>
                {/* <div className="text-body mb-1 text-left px-4 ml-4 md:ml-8 lg:ml-16 xl:ml-32 2xl:ml-64 sm:mr-4 md:mr-8 lg:mr-16 xl:mr-32 2xl:mr-64">
                    {aboutData.aboutMoreDetails.map((paragraph, index) => (
                        paragraph === "" ? (
                            <div key={index} className="h-4"></div>
                        ) : (
                            <p key={index} className="mb-1 mt-4">{paragraph}</p>
                        )
                    ))}
                </div> */}
                {/* Gallery Section */}
                <section className="py-16 bg-gray-100 w-full">
                    <div className="relative w-full overflow-hidden" style={{ height: "min(400px, 50vh)" }}>
                        {/* Left navigation button */}
                        <button
                            onClick={() => handleSlideChange('prev')}
                            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 md:p-2 shadow-md z-10 hover:bg-gray-100 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
                            aria-label="Previous slide"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentProductSlide * 100}%)` }}>
                            {/* Image slides */}
                            <div className="min-w-full flex justify-center items-center">
                                <div className="w-full relative h-full overflow-hidden">
                                    <Image
                                        src="/displayAbout/about-product3.jpg"
                                        alt="Sentra Product 1"
                                        width={1600}
                                        height={500}
                                        className="object-cover w-full h-full"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            {/* Second slide */}
                            <div className="min-w-full flex justify-center items-center">
                                <div className="w-full relative h-full overflow-hidden">
                                    <Image
                                        src="/displayAbout/about-product4.jpg"
                                        alt="Sentra Product 2"
                                        width={1600}
                                        height={500}
                                        className="object-cover w-full h-full"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            {/* Third slide */}
                            <div className="min-w-full flex justify-center items-center">
                                <div className="w-full relative h-full overflow-hidden">
                                    <Image
                                        src="/displayAbout/about-product5.jpg"
                                        alt="Sentra Product 3"
                                        width={1600}
                                        height={500}
                                        className="object-cover w-full h-full"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            {/* Fourth slide */}
                            <div className="min-w-full flex justify-center items-center">
                                <div className="w-full relative h-full overflow-hidden">
                                    <Image
                                        src="/displayAbout/about-product6.jpg"
                                        alt="Sentra Product 4"
                                        width={1600}
                                        height={500}
                                        className="object-cover w-full h-full"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            {/* Fifth slide */}
                            <div className="min-w-full flex justify-center items-center">
                                <div className="w-full relative h-full overflow-hidden">
                                    <Image
                                        src="/displayAbout/about-product7.jpg"
                                        alt="Sentra Product 5"
                                        width={1600}
                                        height={500}
                                        className="object-cover w-full h-full"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right navigation button */}
                        <button
                            onClick={() => handleSlideChange('next')}
                            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 md:p-2 shadow-md z-10 hover:bg-gray-100 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
                            aria-label="Next slide"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </section>

                {/* Pagination Section - 3 Columns Layout */}
                <div className="grid grid-cols-3 items-center gap-4">
                    {/* Column 1: Title */}
                    <div className="text-subtitle font-bold">
                        SENTRA COLLECTION
                    </div>

                    {/* Column 2: Pagination Numbers */}
                    <div className="flex justify-center items-center space-x-2">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentProductSlide(index)}
                                className={`text-xs ${currentProductSlide === index ? 'font-bold text-gray-800' : 'text-gray-400'}`}
                                aria-label={`Go to slide ${index + 1}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>

                    {/* Column 3: Empty Column (centered) */}
                    <div className="flex justify-center items-center">
                        {/* This column remains empty, but content inside will be centered */}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default About;

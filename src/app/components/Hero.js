'use client';

import { useEffect, useState } from 'react'; 
import Image from 'next/image'; 
import Head from 'next/head';  // Import Head from 'next/head'

const Hero = () => {
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
                                Geotextile Non Woven Polyester (PET)
                            </h1>
                            <p className="text-subtitle text-white mb-4 md:mb-6">
                                Produk Geotextile ini berbahan 100% Polyester (PET) dan berkualitas, diproduksi dengan mesin modern
                                <span className="hidden md:inline"><br /></span> sehingga dihasilkan produk dengan ketebalan, kekuatan dan kelenturan yang berbeda-beda
                                <span className="hidden md:inline"><br /></span> sehingga dapat memenuhi berbagai macam kebutuhan proyek yang ada.
                            </p>
                            <button className="text-white px-4 py-1 md:px-6 md:py-2 rounded-full opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
                                style={{ backgroundColor: "rgba(1, 2, 3, 0.9)" }}>
                                <span className="font-bold text-body">LOOK MORE</span>
                            </button>
                        </div>
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

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import data from '/public/data.json';

const Collection = () => {
    const [currentProductSlide, setCurrentProductSlide] = useState(0);
    const productCollectionImages = data.products.map(product => 
        product.images[0] || "/no-image.jpg"
    );
    const totalSlides = productCollectionImages.length;

    // Function to handle slide changes
    const handleSlideChange = (direction) => {
        if (direction === 'next') {
            setCurrentProductSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
        } else {
            setCurrentProductSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
        }
    };

    // Auto slide effect for product collection
    useEffect(() => {
        const productTimer = setInterval(() => {
            setCurrentProductSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(productTimer);
    }, [currentProductSlide, totalSlides]);

    return (
        <section id="collection" className="py-8 md:py-16 bg-gray-100 w-full">
            <div className="container mx-auto px-4">
                <div 
                    className="relative w-full overflow-hidden rounded-xl shadow-lg" 
                    style={{ 
                        height: "min(500px, 60vh)", 
                        maxWidth: "1200px",
                        margin: "0 auto"
                    }}
                >
                    {/* Navigation Buttons */}
                    {totalSlides > 1 && (
                        <>
                            {/* Left Navigation */}
                            <button
                                onClick={() => handleSlideChange('prev')}
                                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 
                                    bg-white/75 rounded-full p-2 md:p-3 
                                    shadow-md z-20 
                                    hover:bg-white hover:scale-105 
                                    transition-all duration-300 
                                    ease-in-out cursor-pointer"
                                aria-label="Previous slide"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Right Navigation */}
                            <button
                                onClick={() => handleSlideChange('next')}
                                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 
                                    bg-white/75 rounded-full p-2 md:p-3 
                                    shadow-md z-20 
                                    hover:bg-white hover:scale-105 
                                    transition-all duration-300 
                                    ease-in-out cursor-pointer"
                                aria-label="Next slide"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}

                    {/* Slide Container */}
                    <div 
                        className="flex transition-transform duration-500 ease-in-out h-full" 
                        style={{ transform: `translateX(-${currentProductSlide * 100}%)` }}
                    >
                        {productCollectionImages.map((src, index) => (
                            <div key={index} className="min-w-full flex-shrink-0 h-full">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={src}
                                        alt={`Sentra Product ${index + 1}`}
                                        fill
                                        priority={index === 0}
                                        className="object-cover object-center"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Section */}
                {totalSlides > 1 && (
                    <div className="mt-4 max-w-[1200px] mx-auto flex justify-between items-center px-4">
                        {/* Collection Title */}
                        <div className="text-sm md:text-lg font-bold text-[#1F3D57]">
                            SENTRA COLLECTION
                        </div>

                        {/* Slide Indicators */}
                        <div className="flex space-x-2">
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentProductSlide(index)}
                                    className={`
                                        w-2 h-2 md:w-3 md:h-3 rounded-full 
                                        transition-all duration-300
                                        ${currentProductSlide === index 
                                            ? 'bg-[#1F3D57] w-4 md:w-6' 
                                            : 'bg-gray-300 hover:bg-gray-400'}
                                    `}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Collection;
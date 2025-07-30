'use client';  

import { useEffect, useState } from 'react';  
import Image from 'next/image';  
import Head from 'next/head';  
import { products } from '../data/products';  // Import the products array  
import data from '/public/data.json';  // Import the data  

const Hero = () => {  
    const [showModal, setShowModal] = useState(false);  
    const [isImageFullScreen, setIsImageFullScreen] = useState(false);  
    const [currentSlide, setCurrentSlide] = useState(0);  
    const [currentProductSlide, setCurrentProductSlide] = useState(0);  

    const slides = data.heroSlides;  
    const totalSlides = products.length; // Assuming all products are displayed in the carousel  

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

    const openModal = () => setShowModal(true);  
    const closeModal = () => setShowModal(false);  
    const toggleImageZoom = () => setIsImageFullScreen((prev) => !prev);  

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
                        <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>  
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
                    <div className="fixed inset-0 flex items-center justify-center z-50">  
                        <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal} />  
                        <div className="bg-white p-6 rounded-lg w-3/4 md:w-1/2 relative z-10 overflow-y-auto max-h-[80vh]">  
                            <button 
                                className="absolute top-4 right-4 text-black text-2xl cursor-pointer" // Added cursor-pointer class
                                onClick={closeModal}
                            >
                                &times;
                            </button>  
                            
                            {/* Product Image Carousel */}  
                            <div className="relative">  
                                <div className="flex overflow-x-auto">  
                                    {products[0].images?.map((image, index) => (  
                                        <div key={index} className="flex-shrink-0 w-full h-[300px] md:w-[400px]">  
                                            <Image src={image} alt={products[0].name} fill className="object-cover rounded-md" />  
                                        </div>  
                                    ))}  
                                </div>  
                                {/* Navigation dots for carousel */}  
                                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">  
                                    {products[0].images?.map((_, index) => (  
                                        <button  
                                            key={index}  
                                            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'}`}  
                                            onClick={() => setCurrentSlide(index)}  
                                        />  
                                    ))}  
                                </div>  
                            </div>  

                            <h2 className="mt-4 text-2xl font-semibold">{products[0].name}</h2>  
                            <p className="mt-2">{products[0].description}</p>  
                            
                            {/* List of Applications */}  
                            <h3 className="mt-4 font-bold">Applications:</h3>  
                            <ul className="list-disc list-inside mt-2">  
                                {products[0].applications?.map((item, index) => (  
                                    <li key={index}>{item}</li>  
                                ))}  

                            </ul>  

                            {/* Additional Product Details */}  
                            <h3 className="mt-4 font-bold">Details:</h3>  
                            <p>{products[0].details?.join(", ") || "No additional details available."}</p>  
                        </div>  
                    </div>  
                )}  
            </main>  
        </div>  
    );  
};  

export default Hero;
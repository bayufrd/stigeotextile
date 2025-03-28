'use client';

import Head from 'next/head';
import Image from 'next/image';
import { aboutData } from '../data/aboutData';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function About() {
  // State to track current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/displayAbout/about-product1.jpg",
    "/displayAbout/about-product2.jpg"
  ];

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
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>About Us - STI</title>
        <meta name="description" content="About Sentra Teknologi Investama" />
        <link rel="icon" href="../../public/logo/logo.ico" />
      </Head>

      {/* Header/Navigation */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-4xl font-bold sm:text-3xl md:text-2xl lg:text-4xl xl:text-2xl text-center sm:text-left">
              SENTRA TEKNOLOGI INVESTAMA
            </div>
            <div className="text-xs text-gray-500 text-center sm:text-left">
              {aboutData.aboutMotto}
            </div>
          </div>
        </div>
      </header>


      {/* Main Content */}
      <main>
        {/* Hero Product Section with Slider */}
        <section className="bg-white w-full">
          <div className="w-full relative h-[50vh] md:h-[40vh] sm:h-[30vh] overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
              >
                <Image
                  src={slide}
                  alt={`Hero slide ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            ))}

            {/* Slider indicators */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="container mx-auto px-4 py-8">
            <div className="text-sm text-gray-600 text-center max-w-md mx-auto">
              {aboutData.aboutSlogan}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2 text-center">ABOUT US</h2>
            <p className="text-sm text-gray-600 mb-12 text-center">
              {aboutData.aboutDetail}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-sm leading-relaxed">
                <p className="mb-4">
                  <span className="font-bold">VISI </span><br />
                  {aboutData.aboutVisi}<br /><br /><br />
                  <span className="font-bold">MISI </span><br />
                  {aboutData.aboutMisi}
                </p>
              </div>
              <div className="text-sm leading-relaxed">
                <p className="mb-4">
                  <span className="font-bold">Apa yang Kami Tawarkan </span><br />
                  {aboutData.aboutOffers}<br /><br /><br />
                  <span className="font-bold">Keunggulan Kami </span><br />
                  {aboutData.aboutAdvantages}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-gray-100 w-full">
          <div className="relative w-full overflow-hidden">
            {/* Left navigation button */}
            <button
              onClick={() => handleSlideChange('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentProductSlide * 100}%)` }}>
              {/* Image slides */}
              <div className="min-w-full flex justify-center items-center">
                <div className="w-full relative h-[50vh] md:h-[40vh] sm:h-[30vh] overflow-hidden">

                  <Image
                    src="/displayAbout/about-product3.jpg"
                    alt="Sentra Product 1"
                    layout="responsive"
                    width={1600}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Second slide */}
              <div className="min-w-full flex justify-center items-center">
                <div className="w-full relative h-[50vh] md:h-[40vh] sm:h-[30vh] overflow-hidden">

                  <Image
                    src="/displayAbout/about-product4.jpg"
                    alt="Sentra Product 2"
                    layout="responsive"
                    width={1600}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Third slide */}
              <div className="min-w-full flex justify-center items-center">
                <div className="w-full relative h-[50vh] md:h-[40vh] sm:h-[30vh] overflow-hidden">

                  <Image
                    src="/displayAbout/about-product5.jpg"
                    alt="Sentra Product 3"
                    layout="responsive"
                    width={1600}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Fourth slide */}
              <div className="min-w-full flex justify-center items-center">
                <div className="w-full relative h-[50vh] md:h-[40vh] sm:h-[30vh] overflow-hidden">

                  <Image
                    src="/displayAbout/about-product6.jpg"
                    alt="Sentra Product 4"
                    layout="responsive"
                    width={1600}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Fifth slide */}
              <div className="min-w-full flex justify-center items-center">
                <div className="w-full relative h-[50vh] md:h-[40vh] sm:h-[30vh] overflow-hidden">
                  <Image
                    src="/displayAbout/about-product7.jpg"
                    alt="Sentra Product 5"
                    layout="responsive"
                    width={1600}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right navigation button */}
            <button
              onClick={() => handleSlideChange('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>

        {/* Pagination Section - 3 Columns Layout */}
        <div className="grid grid-cols-3 items-center gap-4">
          {/* Column 1: Title */}
          <div className="font-bold text-2xl">
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
        <div className="text-sm mb-12 text-left px-4 ml-4 md:ml-8 lg:ml-16 xl:ml-32 2xl:ml-64 sm:mr-4 md:mr-8 lg:mr-16 xl:mr-32 2xl:mr-64">
          {aboutData.aboutMoreDetails.map((paragraph, index) => (
            paragraph === "" ?
              <div key={index} className="h-4"></div> :
              <p key={index} className="mb-4 mt-4">{paragraph}</p>
          ))}
        </div>
      </main>
    </div>
  );
}

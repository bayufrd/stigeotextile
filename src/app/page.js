'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
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
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Product Section with Slider */}
        <section className="bg-white w-full">
          <div className="w-full relative h-[500px] overflow-hidden">
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

                {/* Dark Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-20"></div>
              </div>
            ))}
            {/* Text and Button Section */}
            <div className="absolute top-0 right-0 p-8 z-20 mt-10 mr-4 text-right">
              <h1 className="text-white text-4xl font-bold mb-4">
                Geotextile Non Woven Polyester (PET)
              </h1>
              <p className="text-white text-lg mb-6">
                Produk Geotextile ini berbahan 100% Polyester (PET) dan berkualitas, diproduksi dengan mesin modern <br />
                sehingga dihasilkan produk dengan ketebalan, kekuatan dan kelenturan yang berbeda-beda <br />
                sehingga dapat memenuhi berbagai macam kebutuhan proyek yang ada.
              </p>
              <button className="text-white px-6 py-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
                style={{ backgroundColor: "rgba(1, 2, 3, 0.9)" }}>
                <span className="font-bold">LOOK MORE</span>
              </button>
            </div>
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
        </section>
        {/* About Us Section */}
        <section className="py-16">
          <div className="text-center text-4xl font-bold mt-4 mb-4">
            <h1 className="text-black inline">SEKILAS</h1>
            <h1 className="text-blue-900 inline"> TENTANG KAMI</h1>
          </div>

          {/* Baris pertama: Text Section */}
          <div className="container mx-auto px-4 mb-16">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold mb-4 text-center">Kami menghadirkan solusi Geotextile terbaik untuk setiap kebutuhan pembangunan.</h3>
              <p className="text-lg mb-8 text-black-300 text-center">
                Selamat datang di CV. Sentra Teknologi Investama, sebuah perusahaan yang bergerak dibidang penyediaan produk
                Geotextile dengan kualitas terbaik dan telah memenuhi Standar Nasional. <br /><br />
                <span className="font-bold">CV. Sentra Teknologi Investama </span>
                didirikan dipertengahan tahun 2019 sebagai usaha kecil-menengah yang mengawali kegiatan
                sebagai supplier kebutuhan pabrik di kawasan Industri di kota Serang, kemudian mengembangkan
                diri dan fokus pada penyedia kebutuhan Geosyntethics untuk pembangunan infrastruktur.
                Kami menjual Geotextile antara lain Geotextile Non Woven, Geotextile Woven, Geomembrane, Geocell, Geobag/Sandbag dan Plastik Cor, dll.
              </p>
            </div>
          </div>
          {/* Keunggulan Kami */}
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold">Keunggulan Kami</h3>
            </div>

            {/* 6 Kolom untuk Keunggulan Kami */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

              {/* Point 1: Produk Berkualitas Tinggi */}
              <div className="flex flex-col items-center mb-6 transform transition-all duration-300 ease-in-out hover:scale-110 hover:text-[#1F3D57]">
                <i className="fas fa-cogs text-4xl mb-2 w-6 h-6 sm:w-7 sm:h-7 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 mx-auto text-[#1F3D57]"></i>
                <p className="font-semibold text-[#1F3D57] mt-3 text-sm sm:text-sm md:text-sm lg:text-sm text-center">Produk Berkualitas Tinggi</p>
              </div>

              {/* Point 2: Uji Kualitas Berkala */}
              <div className="flex flex-col items-center mb-6 transform transition-all duration-300 ease-in-out hover:scale-110 hover:text-[#1F3D57]">
                <i className="fas fa-check-circle text-4xl mb-2 w-6 h-6 sm:w-7 sm:h-7 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 mx-auto text-[#1F3D57]"></i>
                <p className="font-semibold text-[#1F3D57] mt-3 text-sm sm:text-sm md:text-sm lg:text-sm text-center">Uji Kualitas Berkala</p>
              </div>

              {/* Point 3: Jaminan dan Keamanan */}
              <div className="flex flex-col items-center mb-6 transform transition-all duration-300 ease-in-out hover:scale-110 hover:text-[#1F3D57]">
                <i className="fas fa-shield-alt text-4xl mb-2 h-6 sm:w-7 sm:h-7 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 mx-auto text-[#1F3D57]"></i>
                <p className="font-semibold text-[#1F3D57] mt-3 text-sm sm:text-sm md:text-sm lg:text-sm text-center">Jaminan dan Keamanan</p>
              </div>

              {/* Point 4: Standar Internasional */}
              <div className="flex flex-col items-center mb-6 transform transition-all duration-300 ease-in-out hover:scale-110 hover:text-[#1F3D57]">
                <i className="fas fa-globe-americas text-4xl mb-2 w-6 h-6 sm:w-7 sm:h-7 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 mx-auto text-[#1F3D57]"></i>
                <p className="font-semibold text-[#1F3D57] mt-3 text-sm sm:text-sm md:text-sm lg:text-sm text-center">Standar Internasional</p>
              </div>

              {/* Point 5: Komitmen terhadap Inovasi */}
              <div className="flex flex-col items-center mb-6 transform transition-all duration-300 ease-in-out hover:scale-110 hover:text-[#1F3D57]">
                <i className="fas fa-lightbulb text-4xl mb-2 w-6 h-6 sm:w-7 sm:h-7 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 mx-auto text-[#1F3D57]"></i>
                <p className="font-semibold text-[#1F3D57] mt-3 text-sm sm:text-sm md:text-sm lg:text-sm text-center">Komitmen terhadap Inovasi</p>
              </div>

              {/* Point 6: Layanan Pelanggan 24/7 */}
              <div className="flex flex-col items-center mb-6 transform transition-all duration-300 ease-in-out hover:scale-110 hover:text-[#1F3D57]">
                <i className="fas fa-headset text-4xl mb-2 w-6 h-6 sm:w-7 h-7 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 mx-auto text-[#1F3D57]"></i>
                <p className="font-semibold text-[#1F3D57] mt-3 text-sm sm:text-sm md:text-sm lg:text-sm text-center">Layanan Pelanggan 24/7</p>
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
      </main>
    </div>
  );
}
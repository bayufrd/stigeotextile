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

  // Add this to your component's state
    const [currentProductSlide, setCurrentProductSlide] = useState(0);

    // Add this function to handle slide changes
    const handleSlideChange = (direction) => {
    if (direction === 'next') {
        setCurrentProductSlide((prev) => (prev === 4 ? 0 : prev + 1));
    } else {
        setCurrentProductSlide((prev) => (prev === 0 ? 4 : prev - 1));
    }
    };

    // Auto slide effect
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
      }, 5000); // Change slide every 5 seconds
      
      return () => clearInterval(timer);
    }, []);
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
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
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
                  Produk Geotextile ini berbahan 100% Polyester (PET) dan berkualitas, diproduksi dengan mesin modern <br/>
                  sehingga dihasilkan produk dengan ketebalan, kekuatan dan kelenturan yang berbeda-beda <br/>
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
          className={`w-3 h-3 rounded-full ${
            index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  </div>
        </section>
          {/* About Us Section */}
          
          <section className="py-16">
          <div className="text-center text-4xl font-bold mt-4 mb-15">
            <h1 className="text-black inline">SEKILAS</h1>
            <h1 className="text-blue-900 inline"> TENTANG KAMI</h1>
          </div>
          <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mr-30 ml-30">
      {/* Left Column: Text Section */}
      <div className="flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-4">Kami menghadirkan solusi Geotextile terbaik untuk setiap kebutuhan pembangunan.</h3>
        <p className="text-lg mb-8 text-black-300">
          Selamat datang di CV. Sentra Teknologi Investama, sebuah perusahaan yang bergerak dibidang penyediaan produk 
          Geotextile dengan kualitas terbaik dan telah memenuhi Standar Nasional. <br/><br/>
          <span className="font-bold">CV. Sentra Teknologi Investama </span>
                    didirikan dipertengahan tahun 2019 sebagai usaha kecil-menengah yang mengawali kegiatan 
                    sebagai supplier kebutuhan pabrik di kawasan Industri di kota Serang, kemudian mengembangkan 
                    diri dan fokus pada penyedia kebutuhan Geosyntethics untuk pembangunan infrastruktur.  
                    Kami menjual Geotextile antara lain Geotextile Non Woven, Geotextile Woven, Geomembrane, Geocell, Geobag/Sandbag dan Plastik Cor, dll.
        </p>
      </div>

      {/* Middle Column: Your Content */}
      <div className="flex flex-col justify-center text-left ml-15">
            <h3 className="text-2xl font-bold mb-4">Keunggulan Kami</h3>
            <br/><br/><br/><br/>
            {/* First Point: Produk Berkualitas Tinggi */}
            <div className="flex flex-col items-start mb-4">
              <i className="fas fa-cogs text-3xl mb-2 text-black"></i>
              <p className="text-xl text-black">Produk Berkualitas Tinggi</p>
            </div>

            {/* Second Point: Uji Kualitas Berkala */}
            <div className="flex flex-col items-start mb-4">
              <i className="fas fa-check-circle text-3xl mb-2 text-black"></i>
              <p className="text-xl text-black">Uji Kualitas Berkala</p>
            </div>

            {/* Third Point: Jaminan dan Keamanan */}
            <div className="flex flex-col items-start mb-4">
              <i className="fas fa-shield-alt text-3xl mb-2 text-black"></i>
              <p className="text-xl text-black">Jaminan dan Keamanan</p>
            </div>

            {/* Fourth Point: Standar Internasional */}
            <div className="flex flex-col items-start mb-4">
              <i className="fas fa-globe-americas text-3xl mb-2 text-black"></i>
              <p className="text-xl text-black">Standar Internasional</p>
            </div>

            {/* Fifth Point: Komitmen terhadap Inovasi */}
            <div className="flex flex-col items-start mb-4">
              <i className="fas fa-lightbulb text-3xl mb-2 text-black"></i>
              <p className="text-xl text-black">Komitmen terhadap Inovasi</p>
            </div>
          </div>

                {/* Right Column: Image Section */}
                <div className="flex items-center justify-center relative w-full h-120 mt-10">
                  <img 
                    src="/displayAbout/about-product8.jpg" 
                    alt="About Image"
                    className="w-full h-full rounded-lg shadow-lg object-cover"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black opacity-50 z-10 rounded-lg"></div>
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
      {/* Carousel container */}
      <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentProductSlide * 100}%)` }}>
        {/* First slide */}
        <div className="min-w-full flex justify-center items-center">
          <div className="w-full relative h-[500px] overflow-hidden">
            <Image
              src="/displayAbout/about-product3.jpg"
              alt="Devialet Product 1"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>

        {/* Second slide */}
        <div className="min-w-full flex justify-center items-center">
          <div className="w-full relative h-[500px] overflow-hidden">
            <Image
              src="/displayAbout/about-product4.jpg"
              alt="Devialet Product 2"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>

        {/* Third slide */}
        <div className="min-w-full flex justify-center items-center">
          <div className="w-full relative h-[500px] overflow-hidden">
            <Image
              src="/displayAbout/about-product5.jpg"
              alt="Devialet Product 3"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>

        {/* Fourth slide */}
        <div className="min-w-full flex justify-center items-center">
          <div className="w-full relative h-[500px] overflow-hidden">
            <Image
              src="/displayAbout/about-product6.jpg"
              alt="Devialet Product 4"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>

        {/* Fifth slide */}
        <div className="min-w-full flex justify-center items-center">
          <div className="w-full relative h-[500px] overflow-hidden">
            <Image
              src="/displayAbout/about-product7.jpg"
              alt="Devialet Product 5"
              layout="fill"
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
    
    <div className="container mx-auto px-4 mt-12">
      <h3 className="font-bold text-2xl">SENTRA<br />COLLECTION</h3>
      <div className="flex justify-center mt-4 items-center space-x-1">
        {currentProductSlide === 0 ? (
          <>
            <span className="text-xs font-bold">1</span>
            <span className="text-xs text-gray-400">—</span>
            <span className="text-xs text-gray-400">2 3 4 5</span>
          </>
        ) : currentProductSlide === 1 ? (
          <>
            <span className="text-xs text-gray-400">1</span>
            <span className="text-xs text-gray-400">—</span>
            <span className="text-xs font-bold">2</span>
            <span className="text-xs text-gray-400">—</span>
            <span className="text-xs text-gray-400">3 4 5</span>
          </>
        ) : currentProductSlide === 2 ? (
          <>
            <span className="text-xs text-gray-400">1 2</span>
            <span className="text-xs text-gray-400">—</span>
            <span className="text-xs font-bold">3</span>
            <span className="text-xs text-gray-400">—</span>
            <span className="text-xs text-gray-400">4 5</span>
          </>
        ) : currentProductSlide === 3 ? (
          <>
            <span className="text-xs text-gray-400">1 2 3</span>
            <span className="text-xs text-gray-400">—</span>
            <span className="text-xs font-bold">4</span>
            <span className="text-xs text-gray-400">—</span>
            <span className="text-xs text-gray-400">5</span>
          </>
        ) : currentProductSlide === 4 ? (
          <>
            <span className="text-xs text-gray-400">1 2 3 4</span>
            <span className="text-xs text-gray-400">—</span>
            <span className="text-xs font-bold">5</span>
          </>
        ) : (
          <>
            <span className="text-xs text-gray-400">1</span>
            <span className="text-xs text-gray-400">—</span>
            <span className="text-xs text-gray-400">2 3 4 5</span>
          </>
        )}
      </div>
    </div>
  </section>
        </main>
      </div>
    );
}
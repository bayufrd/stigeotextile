'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function About() {
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
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="text-4xl font-bold">SENTRA TEKNOLOGI INVESTAMA</div>
            <div className="text-xs text-gray-500">Inovasi dalam Setiap Benang, Kemajuan di Setiap Langkah</div>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="text-gray-600 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.24 0 3.584.12 4.85.07 3.252.148 4.771 1.691 4.919 4.919.58 1.265.069 1.645.069 4.849 0 3.25-.12 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.58-1.644.07-4.85.07-3.24 0-3.584-.12-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.58-1.265-.07-1.644-.07-4.849 0-3.24.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.57 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.14-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.59 1.281-.073 1.689-.073 4.948 0 3.259.14 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.58 1.689.072 4.948.072 3.259 0 3.668-.14 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.59-1.28.073-1.689.073-4.948 0-3.259-.14-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.59-1.69-.073-4.949-.073zm0 5.838c-3.43 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.43-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link href="https://twitter.com" className="text-gray-600 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.12-.53A8.348 8.348 0 022 5.92a8.19 8.19 0 1-2.357.646 4.118 4.118 0 01.84-2.27 8.224 8.224 0 1-2.65.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 1-8.457-4.287 4.106 4.106 0 01.27 5.477A4.072 4.072 0 12.8 9.713v.52a4.15 4.15 0 03.292 4.22 4.095 4.095 0 1-1.853.07 4.108 4.108 0 03.834 2.85A8.233 8.233 0 12 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="https://facebook.com" className="text-gray-600 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
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
            </div>
          ))}
          
          {/* Slider indicators - Keep only this set and remove the duplicate */}
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
        
        <div className="container mx-auto px-4 py-8">
          <div className="text-sm text-gray-600 text-center max-w-md mx-auto">
          Kualitas Tanpa Kompromi, Inovasi Tanpa Henti.
            {/* Removed duplicate slider indicators here */}
          </div>
        </div>
      </section>
        {/* About Us Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2 text-center">ABOUT US</h2>
            <p className="text-sm text-gray-600 mb-12 text-center">
                Selamat datang di Sentra Teknologi Inveetama, pemimpin dalam industri tekstil yang berkomitmen untuk menyediakan produk berkualitas tinggi dan inovatif. 
          Dengan pengalaman lebih dari 100 tahun di pasar, kami telah membangun reputasi sebagai produsen tekstil yang terpercaya, 
          menghasilkan kain dan produk tekstil yang memenuhi standar internasional.
          </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-sm leading-relaxed">
                <p className="mb-4">
                  <span className="font-bold">VISI</span> Menjadi perusahaan tekstil terkemuka yang tidak hanya dikenal karena kualitas, 
                  tetapi juga karena kontribusi kami terhadap keberlanjutan dan inovasi dalam industri tekstil global.<br/>
                  <span className="font-bold">MISI</span> Menyediakan produk tekstil berkualitas tinggi yang memenuhi kebutuhan pasar lokal dan internasional.<br/>
                    Berkomitmen untuk menerapkan prinsip-prinsip keberlanjutan dalam setiap proses produksi.<br/>
                    Mengedepankan teknologi terbaru untuk meningkatkan efisiensi dan inovasi produk kami.
                </p>
              </div>
              <div className="text-sm leading-relaxed">
                <p className="mb-4">
                  <span className="font-bold">Apa yang Kami Tawarkan</span> Kami menawarkan berbagai produk tekstil, mulai dari kain untuk industri pakaian, 
                  rumah tangga, hingga produk fungsional lainnya. Dengan menggunakan bahan baku terbaik dan teknologi canggih, 
                  setiap produk kami dirancang untuk memberikan kenyamanan dan daya tahan yang optimal.<br/>
                  <span className="font-bold">Keunggulan Kami</span> <br/>Kualitas Terjamin: Kami hanya menggunakan bahan baku pilihan dan proses produksi yang ketat untuk memastikan setiap produk yang dihasilkan memenuhi standar tinggi.
                  <br/>Inovasi: Kami selalu mencari cara untuk berinovasi dan memberikan solusi terbaru yang sesuai dengan tren pasar dan kebutuhan pelanggan.
                  <br/>Keberlanjutan: Kami percaya bahwa keberlanjutan adalah kunci untuk masa depan yang lebih baik. Oleh karena itu, kami berkomitmen untuk mengurangi dampak lingkungan melalui produksi yang ramah lingkungan dan penggunaan bahan daur ulang.
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
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition-colors"
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
            src="/displayAbout/about-product1.jpg"
            alt="Devialet Product 1"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      
      {/* Second slide */}
      <div className="min-w-full flex justify-center items-center">
        <div className="w-full relative h-[500px] overflow-hidden">
          <Image
            src="/displayAbout/about-product2.jpg"
            alt="Devialet Product 2"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      
      {/* Third slide */}
      <div className="min-w-full flex justify-center items-center">
        <div className="w-full relative h-[500px] overflow-hidden">
          <Image
            src="/displayAbout/about-product3.jpg"
            alt="Devialet Product 3"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      
      {/* Fourth slide */}
      <div className="min-w-full flex justify-center items-center">
        <div className="w-full relative h-[500px] overflow-hidden">
          <Image
            src="/displayAbout/about-product1.jpg" 
            alt="Devialet Product 4"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      
      {/* Fifth slide */}
      <div className="min-w-full flex justify-center items-center">
        <div className="w-full relative h-[500px] overflow-hidden">
          <Image
            src="/displayAbout/about-product2.jpg"
            alt="Devialet Product 5"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
    
    {/* Right navigation button */}
    <button 
      onClick={() => handleSlideChange('next')} 
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition-colors"
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
                <div className="text-sm mb-12 text-center">
                <p className="mb-4">
                  <span className="font-bold">Hubungi Kami</span> Kami senang dapat membantu Anda. 
                  Jika Anda memiliki pertanyaan atau ingin mengetahui lebih lanjut tentang produk kami, 
                  jangan ragu untuk menghubungi kami melalui halaman kontak.
                </p>
              </div>
      </main>
    </div>
  );
}
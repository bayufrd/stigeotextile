// pages/about.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
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
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link href="https://twitter.com" className="text-gray-600 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="https://facebook.com" className="text-gray-600 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </Link>
              <Link href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Product Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center">
            <div className="relative w-full h-full mb-8">
                <Image
                    src="/displayAbout/about-product1.jpg"
                    alt="textile1"
                    layout="fill"
                    objectFit="contain"  // Gambar akan disesuaikan agar pas dalam kontainer tanpa terpotong
                    priority
                />
                </div>
              <div className="text-sm text-gray-600 text-center max-w-md">
                See how Studio by Devialet brings lifeless acoustics with incredible.
                <div className="mt-4 flex justify-center space-x-2">
                  <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                  <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2 text-center">ABOUT US</h2>
            <p className="text-sm text-gray-600 mb-12 text-center">Sound at its purest state.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-sm leading-relaxed">
                <p className="mb-4">
                  <span className="font-bold">DEVIALET</span> is a French audio company renowned for delivering unmatched
                  listening quality through innovative products like the Phantom Speaker.
                  Devialet combines state-of-the-art patented technologies with unique
                  design to create an exceptional audio experience.
                </p>
              </div>
              <div className="text-sm leading-relaxed">
                <p className="mb-4">
                  <span className="font-bold">Devialet</span> is renowned for its luxurious products and captivating 
                  aesthetics, setting trends in the unique realm of superior audio quality.
                  With patented technologies and meticulous engineering, Devialet
                  continues to combine top-tier audio technology with beautiful design.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative">
                <Image
                  src="/displayAbout/about-product1.jpg"
                  alt="Interior Example 1"
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative">
                <Image
                  src="/displayAbout/about-product2.jpg"
                  alt="Interior Example 2"
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative">
                <Image
                  src="/displayAbout/about-product3.jpg"
                  alt="Interior Example 3"
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Carousel */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="relative">
              <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex justify-center">
                <div className="w-64 h-64 relative">
                  <Image
                    src="/displayAbout/about-product1.jpg"
                    alt="Devialet Product"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="mt-12">
              <h3 className="font-bold text-2xl">DEVIALET<br />COLLECTION</h3>
              <div className="flex justify-center mt-4 space-x-1">
                <span className="text-xs">01</span>
                <span className="text-xs text-gray-400">—</span>
                <span className="text-xs text-gray-400">02</span>
                <span className="text-xs text-gray-400">03</span>
                <span className="text-xs text-gray-400">05</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
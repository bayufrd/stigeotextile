'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link'; // Importing Link from Next.js
import ContactInfo from './contactinfo.js';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing social media icons
import { addressData } from '../data/addressData';

const MapComponent = dynamic(
  () => import('../components/MapsCompany'),
  { ssr: false }
);

const Page = () => {
  return (
    <div style={{ paddingTop: '0px' }}>
      <div className="contact-container">
        <ContactInfo />
      </div>
      
      <div className="map-section">
        <MapComponent />
      </div>
      <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-subtitle">Keunggulan Kami</h3>
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
    </div>
  );
};

export default Page;

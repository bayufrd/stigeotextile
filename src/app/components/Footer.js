'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { addressData } from '../data/addressData';
import { navigation } from '../data/navigation';
import dynamic from 'next/dynamic';
import ContactModal from '../components/ContactModal';

// Dynamically import the MapComponent to avoid SSR issues
const MapComponent = dynamic(
  () => import('../components/MapsCompany'),
  { ssr: false }
);

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Tambahkan kategori mapping
  const categoryMapping = {
    'Semua': 'semua',
    'Geotextile Woven': 'geotextile-woven',
    'Geotextile Non Woven': 'geotextile-non-woven',
    'Geomembrane': 'geomembrane',
  };

  const scrollToSection = (sectionId, category = "") => {
    // Logging untuk debugging
    console.log("Scrolling to section:", sectionId, "Category:", category);

    // Tunggu sebentar untuk animasi
    setTimeout(() => {
      

      if (sectionId === "products" && category) {
        // Gunakan mapping untuk mendapatkan slug kategori
        const categorySlug = categoryMapping[category] || category;

        // Set hash untuk trigger perubahan kategori
        window.location.hash = categorySlug;
      }

      // Cari elemen target
      const element = document.getElementById(sectionId);

      if (element) {
        // Menggunakan metode scroll yang lebih reliable
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        // Fallback jika elemen tidak ditemukan
        console.warn(`Section ${sectionId} not found`);

        // Coba navigasi ke halaman dengan hash
        window.location.href = `/#${sectionId}`;
      }
    }, 300); // Delay untuk animasi
  };
  const socialLinks = [
    // { icon: FaFacebookF, href: addressData.social.facebook },
    // { icon: FaTwitter, href: addressData.social.twitter },
    // { icon: FaInstagram, href: addressData.social.instagram },
    // { icon: FaWhatsapp, href: `https://wa.me/${addressData.whatsapp.replace(/\+|[\s-]/g, '')}` }
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="contact">
      <footer
        className="relative text-white py-8"
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/80/ad/63/80ad631f67f14b858f04f8faab8cfeae.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          {/* Footer Top Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <Image
                src="/logo/logo_navbar.svg"
                alt={addressData.name}
                width={150}
                height={50}
                className="mb-4"
              />
              <h2 className="text-2xl font-bold mb-4">{addressData.name}</h2>
              <p className="text-gray-300 mb-4">
                Solusi Teknologi Inovatif untuk Infrastruktur Berkelanjutan
              </p>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-white 
                      hover:text-blue-300 
                      transition-colors 
                      bg-white/10 
                      rounded-full 
                      p-2 
                      inline-flex 
                      items-center 
                      justify-center
                      hover:bg-white/20
                    "
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Navigasi Cepat</h3>
              <div className="grid grid-cols-2 gap-2">
                {navigation.map((item, index) => (
                  <div key={index}>
                    <button
                      onClick={() => scrollToSection(item.href.substring(1))}
                      className="
                        text-gray-300 
                        hover:text-white 
                        hover:translate-x-1 
                        transition-all 
                        duration-300
                        text-left
                      "
                    >
                      {item.name}
                    </button>
                    {item.children && (
                      <div className="pl-2 mt-2 space-y-1">
                        {item.children.map((child, childIndex) => (
                          <button
                            key={childIndex}
                            onClick={() => scrollToSection("products", child.href)}
                            className="
                              block
                              text-xs
                              text-gray-400
                              hover:text-white
                              transition-colors
                              text-left
                            "
                          >
                            {child.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-bold mb-2">Jam Kerja</h4>
                <p className="text-gray-300">{addressData.hours}</p>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">Hubungi Kami</h3>
              <div className="space-y-4">
                <button
                  onClick={openModal}
                  className="
                    w-full 
                    bg-white/10 
                    hover:bg-white/20 
                    text-white 
                    py-3 
                    rounded-lg 
                    flex 
                    items-center 
                    justify-center 
                    space-x-2 
                    transition-colors
                  "
                >
                  <FaPhoneAlt />
                  <span>Pilih Kontak</span>
                </button>
                
                <div className="space-y-2 text-gray-300">
                  <p>Email: {addressData.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">Lokasi Kami</h3>
            <p className="text-gray-300 mb-4">
              {addressData.address}, {addressData.city}
            </p>
            <MapComponent />
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} {addressData.name}. 
              Hak Cipta Dilindungi. 
              Dikembangkan oleh <Link 
                href="https://dastrevas.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Dastrevas
              </Link>
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </section>
  );
}
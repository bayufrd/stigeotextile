'use client';

import { usePathname } from 'next/navigation';
import '../../styles/globals.css';

export default function Header() {
  const pathname = usePathname();
  
  // Function to generate title based on current path
  const getPageTitle = () => {
    // Remove leading slash and split by additional slashes
    const path = pathname.slice(1);
    
    if (path === '') return 'Home';
    
    // Handle paths with multiple segments (e.g., /about-us/team)
    const segments = path.split('/');
    const mainSegment = segments[0];
    
    // Convert kebab-case to Title Case
    return mainSegment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <header className="absolute inset-0 w-screen h-1/3 -z-10">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed bg-[url('https://i.pinimg.com/736x/80/ad/63/80ad631f67f14b858f04f8faab8cfeae.jpg')] brightness-50"
        style={{backgroundSize: 'cover', backgroundPosition: 'center center'}}
      ></div>
    </header>
  );
}
// 'use client'; // Menandakan bahwa komponen ini berjalan di sisi klien

// import { usePathname } from 'next/navigation'; // Menggunakan hook untuk mendapatkan pathname
// import { useEffect, useState } from 'react'; // Mengimpor useState dan useEffect
// import '../../styles/globals.css'; // Mengimpor file global CSS

// export default function Header() {
//   const pathname = usePathname(); // Mendapatkan path URL saat ini

//   const [scrollPosition, setScrollPosition] = useState(0); // State untuk menyimpan posisi scroll

//   // Fungsi untuk menghasilkan judul berdasarkan path URL saat ini
//   const getPageTitle = () => {
//     const path = pathname.slice(1); // Menghapus slash pertama dari URL

//     if (path === '') return 'Home'; // Jika path kosong, tampilkan 'Home'

//     // Membagi path jika ada beberapa segmen (misalnya /about-us/team)
//     const segments = path.split('/');
//     const mainSegment = segments[0]; // Segmen pertama sebagai judul

//     // Mengubah kebab-case menjadi Title Case
//     return mainSegment
//       .split('-')
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');
//   };

//   // Mengatur posisi scroll saat pengguna menggulir halaman
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);  // Menyimpan posisi scroll saat ini
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Bersihkan event listener saat komponen di-unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <header className="relative w-full h-1/3">
//       {/* Gambar latar belakang yang mengikuti scroll */}
//       <div
//         className="absolute inset-0 z-0 bg-cover bg-center bg-fixed brightness-50"
//         style={{
//           backgroundImage: 'url("https://i.pinimg.com/736x/80/ad/63/80ad631f67f14b858f04f8faab8cfeae.jpg")',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center center',
//           transform: `translateY(${scrollPosition * 0.5}px)`,  // Menambahkan efek scroll
//         }}
//       ></div>

//       {/* Judul Halaman */}
//       <div className="absolute bottom-4 left-0 right-0 z-10 text-center text-white">
//         <h1 className="text-4xl font-bold">{getPageTitle()}</h1>
//       </div>
//     </header>
//   );
// }

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
    <header className="relative w-full py-16 px-4">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed bg-[url('https://i.pinimg.com/736x/80/ad/63/80ad631f67f14b858f04f8faab8cfeae.jpg')] brightness-50" 
      ></div>
      
      <div className="relative z-10 hero-content">
        <h1 className="hero-title mt-6">{getPageTitle()}</h1>
      </div>
    </header>
  );
}
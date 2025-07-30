"use client";  

import { useState, useEffect } from "react";  
import { usePathname } from "next/navigation";  
import Link from "next/link";  
import Image from "next/image";  
import { navigation } from "@/app/data/navigation";  

export default function Navbar() {  
    const [isScrolled, setIsScrolled] = useState(false);  
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);  
    const [openDropdown, setOpenDropdown] = useState(null);  
    const pathname = usePathname();  

    const isActive = (href) => {
        return href === "/"
            ? pathname === "/"
            : pathname.startsWith(href);
    };

    const categoryMapping = {
        'Semua': 'semua',
        'Geotextile Woven': 'geotextile-woven',
        'Geotextile Non Woven': 'geotextile-non-woven',
        'Geomembrane': 'geomembrane',
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);

        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = 'unset';
        };
    }, [isSidebarOpen]);

    const scrollToSection = (sectionId, category = "") => {
        // Logging untuk debugging
        console.log("Scrolling to section:", sectionId, "Category:", category);
    
        // Tutup sidebar dan dropdown
        setIsSidebarOpen(false);
        setOpenDropdown(null);
    
        // Tunggu sebentar untuk animasi sidebar menutup
        setTimeout(() => {
            if (sectionId === "contact") {
                // Scroll ke bagian paling bawah
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                });
                return;
            }
    
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
        }, 300); // Delay untuk animasi sidebar
    };

    const toggleDropdown = (itemName) => {
        setOpenDropdown(openDropdown === itemName ? null : itemName);
    };

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-[9999]">
                <nav 
                    className={`
                        relative w-full transition-all duration-300
                        ${isScrolled || isSidebarOpen 
                            ? 'bg-[#0A1E2B]/90 backdrop-blur-sm h-16' 
                            : 'bg-transparent h-20'}
                    `}
                >
                    <div className="container mx-auto px-4 h-full flex justify-between items-center">
                        {/* Logo and Title Container */}
                        <div className="flex items-center space-x-4">
                            {/* Logo */}
                            <Link 
                                href="/" 
                                className={`
                                    flex items-center transition-all duration-300
                                    ${isScrolled 
                                        ? 'h-10 w-auto' 
                                        : 'h-14 w-auto'}
                                `}
                            >
                                <Image
                                    src="/logo/logo_navbar.svg"
                                    alt="Logo"
                                    width={60}
                                    height={40}
                                    priority
                                    className="object-contain h-full w-auto"
                                />
                            </Link>

                            {/* Web Title */}
                            <h1 
                                 className={`
                                 font-bold 
                                 transition-all 
                                 duration-300 
                                 hidden md:block
                                 ${isScrolled 
                                     ? 'text-white text-lg' 
                                     : 'text-white text-xl'}
                             `}
                            >
                                Sentra Teknologi Investama
                            </h1>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-6 items-center">
                            {navigation.map((item) => (
                                <div key={item.name} className="relative group">
                                    <button
                                        onClick={() => scrollToSection(item.href.substring(1))}
                                        className={`  
                                            text-sm font-medium tracking-wider  
                                            transition-colors duration-300  
                                            ${isActive(item.href)
                                                ? 'text-green-500'
                                                : 'text-white hover:text-green-500'}  
                                        `}
                                    >
                                        {item.name}
                                    </button>

                                    {item.children && (
                                        <div className="absolute top-full left-0 bg-[#0A1E2B] text-white  
                                            mt-2 rounded-md shadow-lg overflow-hidden  
                                            opacity-0 invisible group-hover:visible group-hover:opacity-100  
                                            transition-all duration-300 z-50 min-w-[200px]"
                                        >
                                            {item.children.map((child) => (
                                                <button
                                                    key={child.name}
                                                    onClick={() => scrollToSection("products", child.href)}
                                                    className="block w-full text-left px-4 py-2   
                                                        text-sm hover:bg-green-800   
                                                        transition-colors duration-300"
                                                >
                                                    {child.name}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="md:hidden text-white focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </nav>

                {/* Mobile Sidebar */}
                <div 
                    className={`
                        fixed top-0 right-0 w-64 h-full bg-[#0A1E2B] 
                        transform transition-transform duration-300 ease-in-out z-[110]
                        ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
                        shadow-2xl overflow-hidden
                    `}
                >
                    <div className="flex justify-between items-center p-4 border-b border-gray-700 bg-[#091A25]">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo/logo_navbar.svg"
                                alt="Logo"
                                width={60}
                                height={40}
                                priority
                                className="h-10 w-auto"
                            />
                        </Link>
                        <h1 className="text-white text-lg font-bold">
                                STI
                            </h1>
                        <button 
                            onClick={() => setIsSidebarOpen(false)}
                            className="text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="p-4 overflow-y-auto h-[calc(100%-80px)] bg-[#0A1E2B]">
                        {navigation.map((item) => (
                            <div key={item.name} className="mb-2">
                                <div 
                                    className={`
                                        flex justify-between items-center p-2 
                                        ${isActive(item.href)
                                            ? 'text-green-500'
                                            : 'text-white'}
                                        hover:bg-[#091A25]
                                        rounded-md
                                        transition-colors duration-300
                                        cursor-pointer // Tambahkan cursor pointer
                                    `}
                                >
                                    <button 
                                        onClick={() => {
                                            scrollToSection(item.href.substring(1));
                                            item.children ? toggleDropdown(item.name) : null;
                                        }}
                                        className="flex-grow text-left"
                                    >
                                        {item.name}
                                    </button>
                                    
                                    {item.children && (
                                        <button 
                                            onClick={() => toggleDropdown(item.name)}
                                            className="pl-2"
                                        >
                                            {openDropdown === item.name ? '▲' : '▼'}
                                        </button>
                                    )}
                                </div>

                                {/* Dropdown */}
                                {item.children && openDropdown === item.name && (
                                    <div className="pl-4 mt-2 space-y-2 bg-[#091A25] rounded-md p-2">
                                        {item.children.map((child) => (
                                            <button
                                                key={child.name}
                                                onClick={() => scrollToSection("products", child.href)}
                                                className="block w-full text-left text-white 
                                                    hover:text-green-500 p-2 
                                                    hover:bg-[#0A1E2B]
                                                    rounded-md
                                                    transition-colors duration-300
                                                    cursor-pointer" // Tambahkan cursor pointer
                                            >
                                                {child.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Overlay */}
                {isSidebarOpen && (
                    <div 
                        onClick={() => setIsSidebarOpen(false)}
                        className="fixed inset-0 bg-black bg-opacity-70 z-[90] md:hidden"
                    />
                )}
            </div>
        </>
    );
}
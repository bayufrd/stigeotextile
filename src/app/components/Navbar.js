"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/app/data/navigation";
export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setIsAtTop(currentScrollY === 0);

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
                setIsMenuOpen(false);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav
            className={`${isAtTop ? "absolute" : "fixed"} top-0 left-0 w-full p-4 text-white shadow-md transition-transform duration-300 ${isAtTop ? "bg-transparent" : "backdrop-blur-lg bg-white/75"} z-50 
            ${isVisible ? "translate-y-0" : "-translate-y-full"}`}    
        >
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <Image 
                        src="/logo/logo_navbar.svg" 
                        alt="Logo" 
                        width={80} 
                        height={60} 
                        priority
                    />
                </Link>
                <div className="hidden md:flex space-x-4"> 
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className="hover:underline">{item.name}</Link>
                    ))}
                </div>
                <button onClick={toggleMenu} className="md:hidden">
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
            {isMenuOpen && (
                <div className="md:hidden flex flex-col text-center pt-2 mt-2 border-t border-gray-300">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className="hover:underline my-2">{item.name}</Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full p-4 text-black shadow-md transition-transform duration-300 backdrop-blur-lg bg-white/90 z-50  ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className="container mx-auto flex justify-between">
                <Link href="/" className="text-lg font-bold">
                    Sentra Teknologi Investama
                </Link>
                <div className="space-x-4">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/about" className="hover:underline">About Us</Link>
                    <Link href="/products" className="hover:underline">Products</Link>
                </div>
            </div>
        </nav>
    );
}
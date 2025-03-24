"use client";

import { useState, useEffect } from "react";
import Image from 'next/image';
import ProductCard from "../components/ProductCard";
import ProductCategoryCard from "../components/ProductCategoryCard";

import { products } from "@/app/data/products";

const ProductsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [firstLoad, setFirstLoad] = useState(true);
    const productsPerPage = 5;

    // Slider for hero
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/displayAbout/about-product1.jpg",
        "/displayAbout/about-product2.jpg"
    ];

     // Scroll to top function
    const scrollToTopCategories = () => {
        window.scrollTo({ top: window.innerHeight * 1.1, behavior: "smooth" });
    };

    // Ambil kategori dari sessionStorage jika datang dari breadcrumb
    useEffect(() => {
        const storedCategory = sessionStorage.getItem("selectedCategory");
        if (storedCategory) {
            setSelectedCategory(storedCategory);
            sessionStorage.removeItem("selectedCategory");
        }
    }, []);

    // Filtration by Category
    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category.toLowerCase() === selectedCategory)
        : products;

    // Pagination Products
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage); // Hitung total halaman
    const startIndex = (currentPage - 1) * productsPerPage; // Hitung produk yang ditampilkan di halaman saat ini
    const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

    // Gunakan useEffect untuk memantau perubahan currentPage
    useEffect(() => {
        if (!firstLoad) {
            scrollToTopCategories();
        }
        setFirstLoad(false);
    }, [currentPage]); // Akan dijalankan setiap currentPage berubah

    // Auto-slide setiap 2 detik
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval); // Membersihkan interval saat komponen unmount
    }, [slides.length]);

    return (
        <>
            <div className="w-full pt-6 h-screen">
                <div className="flex justify-evenly">
                    <div className="w-1/2 flex flex-col justify-evenly">
                        <div>
                            <h1 className="text-4xl text-amber-200 font-bold mb-4">PRODUK KAMI</h1>
                            <h3 className="text-lg text-white">
                                Produk kami ini eksklusif bro, jadi dari pada dari pada mending beli disini aja bro, udah terpercaya seIndonesia Raya loh, pokoknya nyesal deh kalau ente ga beli disini, parah nyeselnya, kek kek gimana gitu lah pokoknya!
                            </h3>
                        </div>
                        <div>
                            <h1 className="text-4xl text-[#0A1E2B] font-bold mb-4">KEUNGGULAN PRODUK KAMI</h1>
                            <h3 className="text-lg text-[#4A6B8C]">
                                Produk kami ini eksklusif bro, jadi dari pada dari pada mending beli disini aja bro, udah terpercaya seIndonesia Raya loh, pokoknya nyesal deh kalau ente ga beli disini, parah nyeselnya, kek kek gimana gitu lah pokoknya!
                            </h3>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-center ml-4">
                        <div className="w-2/3 relative h-[600px] rounded-lg rounded-t-[50%] border-t-4 border-x-4 border-white overflow-hidden">
                            {slides.map((slide, index) => (
                                <div 
                                    key={index}
                                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-2000 ease-in-out ${
                                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                    }`}
                                >
                                    <Image
                                        src={slide}
                                        alt={`Hero slide ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>                
                            ))}
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
                    </div>
                </div>
                <div className="relative flex pt-6 bottom-0 mx-auto justify-center text-center animate-bounce w-fit"
                    onClick={() => {scrollToTopCategories()}}>
                    <i className="fa-solid fa-angles-down cursor-pointer align-middle text-xl"></i>
                </div>
            </div>

            <div className="flex flex-col px-2 gap-5 py-6 h-auto mx-auto w-full overflow-x-hidden">
                {/* Sidebar for Categories */}
                <ProductCategoryCard 
                    selectedCategory={selectedCategory} 
                    onSelectCategory={(category) => {
                        setSelectedCategory(category.toLowerCase());
                        setCurrentPage(1);
                        scrollToTopCategories(); 
                    }}  
                />

                <div className="w-full">
                    {/* Products */}
                    <div className="grid grid-cols-1 gap-6">
                        {currentProducts.length > 0 ? (
                            currentProducts.map((product, index) => (
                                <ProductCard key={index} {...product} />
                            ))
                        ) : (
                            <p className="text-gray-500">No products found for this category.</p>
                        )}
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-4 mt-6">
                            <button
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className={`px-4 py-2 rounded font-bold ${currentPage === 1 ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
                            >
                                Previous
                            </button>
                            <span className="font-bold">{currentPage} / {totalPages}</span>
                            <button
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className={`px-4 py-2 rounded font-bold ${currentPage === totalPages ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
                            >
                                Next
                            </button>
                        </div>
                    )}

                    {/* Show All Products Button */}
                    {selectedCategory && (
                        <button
                            onClick={() => {
                                setSelectedCategory(null);
                                setCurrentPage(1);
                                scrollToTopCategories(); 
                            }}
                            className="mt-6 w-full p-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
                        >
                            Show All Products
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProductsPage;

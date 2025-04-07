"use client";

import { useState, useEffect } from "react";
import Image from 'next/image';
import ProductCard from "../components/ProductCard";
// import ProductCategoryCard from "../components/ProductCategoryCard";

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
            scrollToTopCategories(); 
        }
    }, []);

    // Filtration by Category
    const filteredProducts = selectedCategory
        ? products.filter((product) => product.slug_category === selectedCategory)
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
            <div className="h-full w-full">
                <div className="min-h-screen h-screen sm:h-full lg:container mx-auto lg:px-5 xl:px-12 2xl:px-30">
                    <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:items-center">
                        <div className="flex justify-center sm:row-span-4 items-center w-full h-2/5 px-3 sm:px-0 order-1 sm:order-2">
                            <div className="relative 2xl:w-2/3 w-full h-[350px] lg:h-[400px] lg:w-4/5 rounded-lg rounded-t-[50%] border-t-4 border-x-4 border-white overflow-hidden">
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
                        <div className="flex flex-col gap-6 lg:pb-12 px-2 sm:row-span-4 sm:justify-center sm:h-full order-2 sm:order-1 2xl:pt-12 2xl:gap-36">
                            <div className="sm:h-full sm:flex sm:flex-col sm:justify-end">
                                <h1 className="text-center sm:text-title sm:text-left text-subtitle text-[#0A1E2B] sm:text-amber-200">PRODUK KAMI</h1>
                                <h3 className="text-body sm:text-subtitle text-[#4A6B8C] sm:text-white text-justify">
                                    Produk kami ini eksklusif bro, jadi dari pada dari pada mending beli disini aja bro, udah terpercaya seIndonesia Raya loh, pokoknya nyesal deh kalau ente ga beli disini, parah nyeselnya, kek kek gimana gitu lah pokoknya!
                                </h3>
                            </div>
                            <div className="sm:h-full sm:flex sm:flex-col sm:justify-center md:justify-start">
                                <h1 className="text-center sm:text-title sm:text-left text-subtitle text-[#0A1E2B]">KEUNGGULAN PRODUK KAMI</h1>
                                <h3 className="text-body sm:text-subtitle text-[#4A6B8C] text-justify">
                                    Produk kami ini eksklusif bro, jadi dari pada dari pada mending beli disini aja bro, udah terpercaya seIndonesia Raya loh, pokoknya nyesal deh kalau ente ga beli disini, parah nyeselnya, kek kek gimana gitu lah pokoknya!
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        {/* 6 Kolom untuk Keunggulan Kami */}
                        <div className="grid grid-cols-3 gap-4 grid-rows-subgrid md:flex md:justify-between flex-wrap">
                            
                            {/* Point 1 */}
                            <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:text-[#1F3D57]">
                                <i className="fas fa-cogs text-subtitle sm:text-2xl text-[#1F3D57] mb-2"></i>
                                <p className="sm:font-semibold text-body text-[#1F3D57] text-center">Produk Berkualitas Tinggi</p>
                            </div>

                            {/* Point 2 */}
                            <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:text-[#1F3D57]">
                            <i className="fas fa-check-circle text-subtitle sm:text-2xl text-[#1F3D57] mb-2"></i>
                            <p className="sm:font-semibold text-body text-[#1F3D57] text-center">Uji Kualitas Berkala</p>
                            </div>

                            {/* Point 3 */}
                            <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:text-[#1F3D57]">
                            <i className="fas fa-shield-alt text-subtitle sm:text-2xl text-[#1F3D57] mb-2"></i>
                            <p className="sm:font-semibold text-body text-[#1F3D57] text-center">Jaminan dan Keamanan</p>
                            </div>

                            {/* Point 4 */}
                            <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:text-[#1F3D57]">
                            <i className="fas fa-globe-americas text-subtitle sm:text-2xl text-[#1F3D57] mb-2"></i>
                            <p className="sm:font-semibold text-body text-[#1F3D57] text-center">Standar Internasional</p>
                            </div>

                            {/* Point 5 */}
                            <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:text-[#1F3D57]">
                            <i className="fas fa-lightbulb text-subtitle sm:text-2xl text-[#1F3D57] mb-2"></i>
                            <p className="sm:font-semibold text-body text-[#1F3D57] text-center">Komitmen terhadap Inovasi</p>
                            </div>

                            {/* Point 6 */}
                            <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:text-[#1F3D57]">
                            <i className="fas fa-headset text-subtitle sm:text-2xl text-[#1F3D57] mb-2"></i>
                            <p className="sm:font-semibold text-body text-[#1F3D57] text-center">Layanan Pelanggan 24/7</p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:flex justify-center pt-6">
                        <button
                            onClick={scrollToTopCategories}
                            className="animate-bounce text-[#1F3D57] bg-white rounded-full p-2 transform transition duration-300 hover:scale-110 hover:text-[#1F3D57] cursor-pointer"
                            aria-label="Scroll to Categories"
                        >
                            <i className="fa-solid fa-angles-down text-xl"></i>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-5 my-6 h-auto mx-auto overflow-x-hidden">
                    {/* Sidebar for Categories
                    <ProductCategoryCard 
                        selectedCategory={selectedCategory} 
                        onSelectCategory={(item) => {
                            setSelectedCategory(item);
                            setCurrentPage(1);
                            scrollToTopCategories(); 
                        }}  
                    /> */}

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
            </div>
        </>
    );
};

export default ProductsPage;

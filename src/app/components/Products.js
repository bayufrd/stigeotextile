'use client';

import { useState, useEffect, useCallback } from 'react';
import { products } from '../data/products';
import Image from 'next/image';


const Products = () => {
    const [expanded, setExpanded] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isImageFullScreen, setIsImageFullScreen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('Semua');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [currentPage, setCurrentPage] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
    const [productsPerPage, setProductsPerPage] = useState(6);

    // Define available categories
    const categories = ['Semua', 'Geotextile Woven', 'Geotextile Non Woven', 'Geotextile Geobag', 'Geomembrane'];

    //For Mapping Navbar
    const categoryMapping = {
        'Semua': 'semua',  // No filter
        'Geotextile Woven': 'geotextile-woven',
        'Geotextile Non Woven': 'geotextile-non-woven',
        'Geotextile Geobag': 'geobag',
        'Geomembrane': 'geomembrane',
    };

    const [currentProductSlide, setCurrentProductSlide] = useState(0);
    const handleSlideChange = (direction) => {
        if (direction === 'next') {
            setCurrentProductSlide((prev) => (prev + 1) % selectedProduct.images.length);
        } else {
            setCurrentProductSlide((prev) => (prev - 1 + selectedProduct.images.length) % selectedProduct.images.length);
        }
    };

    // Handle hash change for active category
    useEffect(() => {
        const handleHashChange = () => {
            const categoryFromHash = window.location.hash.replace('#', '').toLowerCase();

            // Mapping dari slug ke nama kategori
            const slugToCategory = {
                'semua': 'Semua',
                'geotextile-woven': 'Geotextile Woven',
                'geotextile-non-woven': 'Geotextile Non Woven',
                'geotextile-geobag': 'Geotextile Geobag',
                'geomembrane': 'Geomembrane'
            };

            // Cari kategori yang sesuai dengan slug
            const matchedCategory = Object.keys(slugToCategory).find(
                slug => slug === categoryFromHash
            );

            if (matchedCategory) {
                // Set kategori menggunakan nama kategori
                setActiveCategory(slugToCategory[matchedCategory]);
            } else {
                setActiveCategory('Semua');  // Default to 'Semua' if no valid category
            }
        };

        // Run on initial load and whenever the hash changes
        handleHashChange(); // Initial check
        window.addEventListener('hashchange', handleHashChange);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    // Check if device is mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 640);
            setProductsPerPage(window.innerWidth < 640 ? 2 : 6);
        };

        // Initial check
        checkIfMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkIfMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    // Filter products based on selected category
    useEffect(() => {
        // Get the category from the mapping using the selected UI category
        const selectedCategorySlug = categoryMapping[activeCategory];

        if (selectedCategorySlug === 'semua') {
            setFilteredProducts(products); // No filter
        } else {
            const filtered = products.filter(product =>
                product.slug_category === selectedCategorySlug // Use slug for filtering
            );
            setFilteredProducts(filtered);
        }
        setCurrentPage(1); // Reset to first page when category changes
    }, [activeCategory]);


    // Get current products for pagination
    const getCurrentProducts = useCallback(() => {
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        return filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    }, [currentPage, productsPerPage, filteredProducts]);

    // Calculate total pages
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Go to next page
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Go to previous page
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    // Add overlay and disable body scroll when modal is open
    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
            // Create overlay if not already present
            if (!document.getElementById('modal-overlay')) {
                const overlay = document.createElement('div');
                overlay.id = 'modal-overlay';
                overlay.style.position = 'fixed';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.width = '100%';
                overlay.style.height = '100%';
                overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Dark semi-transparent background
                overlay.style.zIndex = '40'; // Ensure it's below the modal
                document.body.appendChild(overlay);
            }
        } else {
            document.body.style.overflow = ''; // Enable scrolling
            const overlay = document.getElementById('modal-overlay');
            if (overlay) {
                document.body.removeChild(overlay);
            }
        }

        return () => {
            document.body.style.overflow = '';
            const overlay = document.getElementById('modal-overlay');
            if (overlay) {
                document.body.removeChild(overlay);
            }
        };
    }, [showModal]);

    const handleToggle = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    const openModal = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setIsImageFullScreen(false); // Reset full-screen state when closing the modal
    };

    const toggleImageZoom = () => {
        setIsImageFullScreen((prev) => !prev);
    };

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    return (
        <section id="products" className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <div className="text-center text-title mt-0 mb-4">
                    <h1 className="text-black inline">PRODUK</h1>
                    <h1 className="text-[#1F3D57] inline"> KAMI</h1>
                </div>

                {/* Category Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`py-2 px-6 rounded-full transition-all duration-300 ${activeCategory === category
                                ? 'bg-[#1F3D57] text-white font-semibold shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Product Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {getCurrentProducts().length > 0 ? (
                        getCurrentProducts().map((product, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl grid grid-rows-[auto_1fr_auto]" // Gunakan grid untuk layout
                                onClick={() => openModal(product)}
                            >
                                <div className="h-48 mb-4 overflow-hidden rounded-md">
                                    <img
                                        src={product.images[0]}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition duration-500 ease-in-out hover:scale-110"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">{product.name}</h3>
                                    <p className="text-gray-500 mt-2">
                                        {expanded === index
                                            ? product.description
                                            : product.description.length > 150
                                                ? `${product.description.slice(0, 150)}...`
                                                : product.description}
                                    </p>
                                    <button
                                        className="text-blue-600 mt-2 cursor-pointer"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleToggle(index);
                                        }}
                                    >
                                        {expanded === index ? 'Show Less' : 'Show More'}
                                    </button>
                                </div>
                                <div className="text-left mt-4">
                                    <span className="inline-block py-2 px-4 bg-[#1F3D57] text-white rounded-full text-sm font-semibold cursor-pointer hover:bg-blue-600">
                                        {product.category + " ✓" || "Geotextile"}
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-3 py-16 text-center">
                            <p className="text-xl text-gray-500">Tidak ada produk dalam kategori ini.</p>
                        </div>
                    )}
                </div>
                {/* Pagination */}
                {filteredProducts.length > productsPerPage && (
                    <div className="pagination-container mt-12 flex justify-center items-center">
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className={`mx-1 px-4 py-2 rounded-md ${currentPage === 1
                                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                : 'bg-[#1F3D57] text-white hover:bg-[#17324A]'
                                }`}
                        >
                            &laquo;
                        </button>

                        <div className="hidden sm:flex">
                            {[...Array(totalPages)].map((_, index) => {
                                // For desktop: show all pages if there are 5 or fewer,
                                // otherwise show first page, last page, current page, and one page before and after current
                                const pageNum = index + 1;
                                const showPageNumber = totalPages <= 5 ||
                                    pageNum === 1 ||
                                    pageNum === totalPages ||
                                    pageNum === currentPage ||
                                    pageNum === currentPage - 1 ||
                                    pageNum === currentPage + 1;

                                // Show ellipsis for gaps
                                const showEllipsisBefore = pageNum === currentPage - 1 && currentPage > 3;
                                const showEllipsisAfter = pageNum === currentPage + 1 && currentPage < totalPages - 2;

                                return (
                                    <div key={index} className="flex items-center">
                                        {showEllipsisBefore && <span className="mx-1">...</span>}

                                        {showPageNumber && (
                                            <button
                                                onClick={() => paginate(pageNum)}
                                                className={`mx-1 px-4 py-2 rounded-md ${currentPage === pageNum
                                                    ? 'bg-[#1F3D57] text-white'
                                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                    }`}
                                            >
                                                {pageNum}
                                            </button>
                                        )}

                                        {showEllipsisAfter && <span className="mx-1">...</span>}
                                    </div>
                                );
                            })}
                        </div>

                        {/* For mobile: just show current page / total pages */}
                        <div className="sm:hidden mx-2">
                            <span className="text-gray-700 font-medium">
                                {currentPage} / {totalPages}
                            </span>
                        </div>

                        <button
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            className={`mx-1 px-4 py-2 rounded-md ${currentPage === totalPages
                                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                : 'bg-[#1F3D57] text-white hover:bg-[#17324A]'
                                }`}
                        >
                            &raquo;
                        </button>
                    </div>
                )}
            </div>

            {/* Modal for Detailed View */}
            {showModal && selectedProduct && (
                <div className="fixed inset-0 flex justify-center items-center z-50 p-4 pt-16">
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={closeModal}
                    />
                    <div className="relative w-full max-w-5xl h-[85vh] bg-white rounded-xl shadow-2xl overflow-hidden flex">
                        {/* Image Section - Added border and overflow control */}
                        <div className="w-1/2 relative border-r border-gray-200">
                            <div className="absolute top-4 left-4 z-10">
                                <span className="bg-[#1F3D57] text-white px-3 py-1 rounded-full text-sm">
                                    {selectedProduct.category || "Geotextile"}
                                </span>
                            </div>

                            {/* Image Slider - Added overflow hidden */}
                            <div className="relative w-full h-full overflow-hidden">
                                <div
                                    className="flex h-full transition-transform duration-300"
                                    style={{ transform: `translateX(-${currentProductSlide * 100}%)` }}
                                >
                                    {selectedProduct.images.map((image, index) => (
                                        <div
                                            key={index}
                                            className="min-w-full h-full flex items-center justify-center cursor-zoom-in px-4 py-4" // Added padding
                                        >
                                            <div className="w-full h-full bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
                                                <img
                                                    src={image}
                                                    alt={`${selectedProduct.name} - Image ${index + 1}`}
                                                    className="max-w-full max-h-full object-contain"
                                                    onError={(e) => {
                                                        const imgElement = e.currentTarget;
                                                        imgElement.style.display = 'none';
                                                        imgElement.parentElement?.classList.add('bg-gray-300');
                                                    }}
                                                    onClick={() => {
                                                        const fullScreenImage = window.open('', '_blank');
                                                        fullScreenImage.document.write(`  
                                                <html>  
                                                    <head>  
                                                        <title>${selectedProduct.name} - Image ${index + 1}</title>  
                                                        <style>  
                                                            body {   
                                                                margin: 0;   
                                                                display: flex;   
                                                                justify-content: center;   
                                                                align-items: center;   
                                                                height: 100vh;   
                                                                background: rgba(0,0,0,0.9);  
                                                            }  
                                                            img {   
                                                                max-width: 95%;   
                                                                max-height: 95%;   
                                                                object-fit: contain;   
                                                            }  
                                                        </style>  
                                                    </head>  
                                                    <body>  
                                                        <img src="${image}" alt="${selectedProduct.name} - Image ${index + 1}">  
                                                    </body>  
                                                </html>  
                                            `);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Navigation Buttons */}
                                {selectedProduct.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={() => handleSlideChange('prev')}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => handleSlideChange('next')}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </>
                                )}

                                {/* Indicator */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                                    {selectedProduct.images.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`w-2 h-2 rounded-full ${currentProductSlide === index ? 'bg-[#1F3D57]' : 'bg-gray-300'}`}
                                            onClick={() => setCurrentProductSlide(index)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Details Section */}
                        <div className="w-1/2 p-8 overflow-y-auto">
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-gray-600 hover:text-black"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <h2 className="text-3xl font-bold mb-4">{selectedProduct.name}</h2>
                            <p className="text-gray-600 mb-6">{selectedProduct.description}</p>

                            {/* Accordion-like Sections */}
                            <div className="space-y-4">
                                {/* Applications */}
                                {selectedProduct.applications && selectedProduct.applications.length > 0 && (
                                    <div className="border-b pb-4">
                                        <h3 className="text-xl font-semibold mb-3">Aplikasi</h3>
                                        <ul className="space-y-2 text-gray-600">
                                            {selectedProduct.applications.map((app, index) => (
                                                <li key={index} className="flex items-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 mr-2 text-[#1F3D57]"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    {app}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Details */}
                                {selectedProduct.details && selectedProduct.details.length > 0 && (
                                    <div className="border-b pb-4">
                                        <h3 className="text-xl font-semibold mb-3">
                                            {selectedProduct.detail_title || "Detail Produk"}
                                        </h3>
                                        <ul className="space-y-2 text-gray-600">
                                            {selectedProduct.details.map((detail, index) => (
                                                <li key={index} className="flex items-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 mr-2 text-[#1F3D57]"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Specifications Image */}
                                {selectedProduct.specs && (
                                    <div>
                                        <h3 className="text-xl font-semibold mb-3">Spesifikasi</h3>
                                        <img
                                            src={selectedProduct.specs}
                                            alt="Product Specifications"
                                            className="w-full rounded-lg shadow-md cursor-zoom-in"
                                            onClick={() => {
                                                const fullScreenImage = window.open('', '_blank');
                                                fullScreenImage.document.write(`  
                                        <html>  
                                            <head>  
                                                <title>Spesifikasi ${selectedProduct.name}</title>  
                                                <style>  
                                                    body {   
                                                        margin: 0;   
                                                        display: flex;   
                                                        justify-content: center;   
                                                        align-items: center;   
                                                        height: 100vh;   
                                                        background: rgba(0,0,0,0.9);  
                                                    }  
                                                    img {   
                                                        max-width: 95%;   
                                                        max-height: 95%;   
                                                        object-fit: contain;   
                                                    }  
                                                </style>  
                                            </head>  
                                            <body>  
                                                <img src="${selectedProduct.specs}" alt="Spesifikasi ${selectedProduct.name}">  
                                            </body>  
                                        </html>  
                                    `);
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile Version */}
            {showModal && selectedProduct && isMobile && (
                <div className="fixed inset-0 z-50 bg-white overflow-y-auto pt-16">

                    {/* Image Carousel */}
                    <div className="relative w-full">
                        <div
                            className="flex transition-transform duration-300"
                            style={{ transform: `translateX(-${currentProductSlide * 100}%)` }}
                        >
                            {selectedProduct.images.map((image, index) => (
                                <div
                                    key={index}
                                    className="min-w-full flex justify-center items-center cursor-zoom-in"
                                    onClick={() => {
                                        const fullScreenImage = window.open('', '_blank');
                                        fullScreenImage.document.write(`  
                                <html>  
                                    <head>  
                                        <title>${selectedProduct.name} - Image ${index + 1}</title>  
                                        <style>  
                                            body {   
                                                margin: 0;   
                                                display: flex;   
                                                justify-content: center;   
                                                align-items: center;   
                                                height: 100vh;   
                                                background: rgba(0,0,0,0.9);  
                                            }  
                                            img {   
                                                max-width: 95%;   
                                                max-height: 95%;   
                                                object-fit: contain;   
                                            }  
                                        </style>  
                                    </head>  
                                    <body>  
                                        <img src="${image}" alt="${selectedProduct.name} - Image ${index + 1}">  
                                    </body>  
                                </html>  
                            `);
                                    }}
                                >
                                    <img
                                        src={image}
                                        alt={`${selectedProduct.name} - Image ${index + 1}`}
                                        className="w-full max-h-[50vh] object-contain"
                                    />
                                </div>
                            ))}
                        </div>


                        {/* Navigation Buttons */}
                        {selectedProduct.images.length > 1 && (
                            <>
                                <button
                                    onClick={() => handleSlideChange('prev')}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => handleSlideChange('next')}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}
                        <button
                            onClick={closeModal}
                            className="
        absolute 
        top-4 
        right-4 
        text-gray-600 
        hover:text-black 
        z-10 
        bg-white 
        bg-opacity-20 
        hover:bg-opacity-40 
        rounded-full 
        p-2 
        transition-all 
        duration-300 
        flex 
        items-center 
        justify-center
    "
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
                        {/* Indicator */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                            {selectedProduct.images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full ${currentProductSlide === index ? 'bg-[#1F3D57]' : 'bg-gray-300'}`}
                                    onClick={() => setCurrentProductSlide(index)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="p-4">
                        <div className="bg-[#1F3D57] text-white px-3 py-1 rounded-full text-sm inline-block mb-4">
                            {selectedProduct.category || "Geotextile"}
                        </div>

                        <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
                        <p className="text-gray-600 mb-6">{selectedProduct.description}</p>

                        {/* Applications */}
                        {selectedProduct.applications && selectedProduct.applications.length > 0 && (
                            <div className="border-b pb-4 mb-4">
                                <h3 className="text-xl font-semibold mb-3">Aplikasi</h3>
                                <ul className="space-y-2 text-gray-600">
                                    {selectedProduct.applications.map((app, index) => (
                                        <li key={index} className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 mr-2 text-[#1F3D57]"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            {app}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Details */}
                        {selectedProduct.details && selectedProduct.details.length > 0 && (
                            <div className="border-b pb-4 mb-4">
                                <h3 className="text-xl font-semibold mb-3">
                                    {selectedProduct.detail_title || "Detail Produk"}
                                </h3>
                                <ul className="space-y-2 text-gray-600">
                                    {selectedProduct.details.map((detail, index) => (
                                        <li key={index} className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 mr-2 text-[#1F3D57]"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Specifications Image */}
                        {selectedProduct.specs && (
                            <div>
                                <h3 className="text-xl font-semibold mb-3">Spesifikasi</h3>
                                <img
                                    src={selectedProduct.specs}
                                    alt="Product Specifications"
                                    className="w-full rounded-lg shadow-md cursor-zoom-in"
                                    onClick={() => {
                                        const fullScreenImage = window.open('', '_blank');
                                        fullScreenImage.document.write(`
                                <html>
                                    <head>
                                        <title>Spesifikasi ${selectedProduct.name}</title>
                                        <style>
                                            body { 
                                                margin: 0; 
                                                display: flex; 
                                                justify-content: center; 
                                                align-items: center; 
                                                height: 100vh; 
                                                background: rgba(0,0,0,0.9);
                                            }
                                            img { 
                                                max-width: 95%; 
                                                max-height: 95%; 
                                                object-fit: contain; 
                                            }
                                        </style>
                                    </head>
                                    <body>
                                        <img src="${selectedProduct.specs}" alt="Spesifikasi ${selectedProduct.name}">
                                    </body>
                                </html>
                            `);
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Products;
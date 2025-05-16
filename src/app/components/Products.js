'use client';

import { useState, useEffect } from 'react';
import { products } from '../data/products';

const Products = () => {
    const [expanded, setExpanded] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isImageFullScreen, setIsImageFullScreen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('Semua');
    const [filteredProducts, setFilteredProducts] = useState(products);

    // Define available categories
    const categories = ['Semua', 'Geotextile Woven', 'Geotextile Non Woven', 'Geomembrane'];

    // Filter products based on selected category
    useEffect(() => {
        if (activeCategory === 'Semua') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.category === activeCategory);
            setFilteredProducts(filtered);
        }
    }, [activeCategory]);

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
                            className={`py-2 px-6 rounded-full transition-all duration-300 ${
                                activeCategory === category
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
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
                                onClick={() => openModal(product)}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                    alt={product.name}
                                    className="h-48 w-auto object-cover transition duration-500 ease-in-out hover:scale-110"
                                />
                                <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
                                <p className="text-gray-500">
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
            </div>

            {/* Modal for Detailed View */}
            {showModal && selectedProduct && (
                <div className="fixed inset-0 flex justify-center items-center z-50">
                    {/* Overlay that closes modal when clicked */}
                    <div
                        className="absolute inset-0 bg-gray-800 bg-opacity-50"
                        onClick={closeModal}
                    />
                    <div className="bg-white p-8 rounded-lg w-3/4 md:w-1/2 relative max-h-[80vh] overflow-y-auto z-10">
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-black text-2xl"
                            onClick={closeModal}
                            style={{
                                zIndex: 100, // Ensure it is above other elements
                                cursor: 'pointer',
                            }}
                        >
                            &times;
                        </button>
                        <div className="relative">
                            {/* Image */}
                            <img
                                src={selectedProduct.images && selectedProduct.images.length > 0 ? selectedProduct.images[0] : '/no-image.jpg'}
                                alt={selectedProduct.name}
                                className={`w-full relative h-[48vh] md:h-[40vh] sm:h-[30vh] object-cover rounded-md mb-4 cursor-pointer transition-all duration-500 ${isImageFullScreen ? 'transform scale-150' : ''}`}
                                onClick={toggleImageZoom} // Toggle zoom on click
                            />
                            {/* Product Details */}
                            <div className="mt-4">
                                <h2 className="text-2xl font-semibold">{selectedProduct.name}</h2>
                                <p className="text-gray-500 mt-4">{selectedProduct.description}</p>
                                {/* List of Applications */}
                                <ul className="text-gray-500 list-none p-2 mt-4"> {/* Adding a margin-top for spacing */}
                                    {selectedProduct.applications && selectedProduct.applications.length > 0 ? (
                                        selectedProduct.applications.map((application, index) => (
                                            <li key={index} className="flex justify-start gap-x-4">
                                                <span>•</span>
                                                <span>{application}</span>
                                            </li>
                                        ))
                                    ) : (
                                        <li className="text-gray-500">

                                        </li> // Default text if no applications
                                    )}
                                </ul>
                                <div className="mt-4">
                                    <span className="text-lg text-gray-600 block">
                                        <strong>{selectedProduct.detail_title || " "}</strong>
                                    </span>
                                    {/* List of Product Details */}
                                    <ul className="text-gray-500 list-none p-2">
                                        {selectedProduct.details && selectedProduct.details.length > 0 ? (
                                            selectedProduct.details.map((detail, index) => (
                                                <li key={index} className="flex justify-start gap-x-4">
                                                    <span>•</span>
                                                    <span>{detail}</span>
                                                </li>
                                            ))
                                        ) : (
                                            <li className="text-gray-500">

                                            </li>
                                        )}
                                    </ul>

                                    {/* Image for Specifications */}
                                    {selectedProduct.specs && (
                                        <div className="mt-4">
                                            <img
                                                src={selectedProduct.specs}
                                                alt="Product Specs"
                                                className={`w-full h-auto object-cover rounded-md cursor-pointer ${isImageFullScreen ? 'transform scale-150' : ''}`}
                                                onClick={toggleImageZoom} // Toggle zoom on click
                                            />
                                        </div>
                                    )}

                                    <span className="text-lg text-[#1F3D57] block mt-2">
                                        Category: <strong>{selectedProduct.category || "Geotextile"}</strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Products;
"use client";

import { useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductCategoryCard from "../components/ProductCategoryCard";
import { products } from "@/app/data/products";

const ProductsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

     // Filtration by Category
     const filteredProducts = selectedCategory
     ? products.filter((product) => product.category === selectedCategory)
     : products;

    // Pagination Products
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5; // Jumlah produk per halaman
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage); // Hitung total halaman
    const startIndex = (currentPage - 1) * productsPerPage; // Hitung produk yang ditampilkan di halaman saat ini
    const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

    return (
        <div className="flex px-2 gap-5 py-8 h-auto">
            {/* Sidebar for Categories */}
            <ProductCategoryCard 
                selectedCategory={selectedCategory} 
                onSelectCategory={(category) => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
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
                        }}
                        className="mt-6 w-full p-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
                    >
                        Show All Products
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductsPage;

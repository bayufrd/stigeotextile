"use client";

import { useState, useRef, useEffect } from "react";
import { ProductCategories } from "@/app/data/productCategories";

const ProductCategorySlider = ({ selectedCategory, onSelectCategory }) => {
    const [showButtons, setShowButtons] = useState(false);
    const sliderRef = useRef(null);
    console.log(selectedCategory);
    
    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            setShowButtons(slider.scrollWidth > slider.clientWidth);
        }
    }, [ProductCategories]);

    const prevCategory = () => {
        sliderRef.current.scrollBy({ left: -150, behavior: "smooth" });
    };

    const nextCategory = () => {
        sliderRef.current.scrollBy({ left: 150, behavior: "smooth" });
    };

    return (
        <div className="bg-[#0A1E2B] text-white rounded-lg p-4 w-full max-h-fit relative">
            <h3 className="text-lg text-center font-bold mb-4">PRODUCT CATEGORIES</h3>
            <div className="flex items-center w-full justify-center relative">
                {showButtons && (
                    <button onClick={prevCategory} className="text-white p-2 absolute left-0">
                        <i className="fa-solid fa-circle-left text-xl" />
                    </button>
                )}
                <ul
                    ref={sliderRef}
                    className="flex overflow-hidden overflow-x-auto scrollbar-hide w-full justify-center space-x-4 no-scrollbar"
                >
                    {ProductCategories.map((category, index) => (
                        <li
                            key={index}
                            onClick={() => onSelectCategory(category.slug)}
                            className={`p-2 whitespace-nowrap rounded cursor-pointer list-none flex-shrink-0 ${
                                selectedCategory === category.name.toLowerCase() ? "bg-blue-700" : "hover:bg-[#4A6B8C]"
                            }`}
                        >
                            {category.name}
                        </li>
                    ))}
                </ul>
                {showButtons && (
                    <button onClick={nextCategory} className="text-white p-2 absolute right-0">
                        <i className="fa-solid fa-circle-right text-xl" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductCategorySlider;

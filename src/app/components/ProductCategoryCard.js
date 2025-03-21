"use client";

import { useState, useRef, useEffect } from "react";
import { ProductCategories } from "@/app/data/productCategories";

const ProductCategorySlider = ({ selectedCategory, onSelectCategory }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const categoriesLength = ProductCategories.length;
    const sliderRef = useRef(null);

    const prevCategory = () => {
        setCurrentIndex((prev) => (prev === 0 ? categoriesLength - 1 : prev - 1));
        sliderRef.current.scrollBy({ left: -150, behavior: "smooth" });
    };

    const nextCategory = () => {
        setCurrentIndex((prev) => (prev === categoriesLength - 1 ? 0 : prev + 1));
        sliderRef.current.scrollBy({ left: 150, behavior: "smooth" });
    };

    useEffect(() => {
        const slider = sliderRef.current;
        const handleWheel = (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                slider.scrollBy({ left: e.deltaY > 0 ? 100 : -100, behavior: "smooth" });
            }
        };

        slider.addEventListener("wheel", handleWheel);
        return () => slider.removeEventListener("wheel", handleWheel);
    }, []);

    return (
        <div className="bg-blue-500 text-white rounded-lg p-4 w-full max-h-fit relative">
            <h3 className="text-lg text-center font-bold mb-4">PRODUCT CATEGORIES</h3>
            <div className="flex items-center justify-between w-full">
                <button onClick={prevCategory} className="text-white p-2">
                    <i className="fa-solid fa-circle-left text-xl" />
                </button>
                <ul
                    ref={sliderRef}
                    className="flex overflow-hidden overflow-x-auto scrollbar-hide w-full justify-start space-x-4 no-scrollbar"
                    onScroll={() => setCurrentIndex(Math.round(sliderRef.current.scrollLeft / 150))}
                >
                    {ProductCategories.map((category) => (
                        <li
                            key={category.name}
                            onClick={() => onSelectCategory(category.name)}
                            className={`p-2 whitespace-nowrap rounded cursor-pointer list-none flex-shrink-0 ${
                                selectedCategory === category.name.toLowerCase() ? "bg-blue-700" : "hover:bg-blue-600"
                            }`}
                        >
                            {category.name}
                        </li>
                    ))}
                </ul>
                <button onClick={nextCategory} className="text-white p-2">
                    <i className="fa-solid fa-circle-right text-xl" />
                </button>
            </div>
        </div>
    );
};

export default ProductCategorySlider;

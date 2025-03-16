// app/components/ProductCard.js
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductCard = ({ images, name, description, details, specs }) => {
    return (
        <div className="flex border rounded-lg p-4 shadow-md">
        <div className="w-1/3 flex items-center justify-center border-r p-4">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="w-full"
            >
            {images.map((img, index) => (
                <SwiperSlide key={index}>
                <div className="relative w-full h-40">
                    <Image
                    src={img}
                    alt={name}
                    layout="fill"
                    objectFit="contain"
                    />
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>

        <div className="w-2/3 p-4 space-y-2">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-700">{description}</p>
            {details && <p className="text-sm text-gray-500">{details}</p>}
            <p className="text-sm font-medium text-gray-900">{specs}</p>
        </div>
        </div>
    );
};

export default ProductCard;

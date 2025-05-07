"use client";
import Image from "next/image";
import { useState } from "react";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import { products } from "../../data/products";
import Breadcrumb from "@/app/components/Breadcrumb";

const ProductDetail = () => {
  const { "product-category": category, product } = useParams();
  const productData = products.find(
    (p) => p.slug_category === category && p.slug_product === product
  );
  
  // Check if product exists first
  if (!productData) return notFound();
  
  // Now safely access productData properties
  const hasImages = productData.images && productData.images.length > 0;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <>
    <div className="relative w-full py-8 px-10 h-screen bg-amber-50">
        <Breadcrumb />
        <div className="flex flex-row pt-8">
            <div className="w-1/2 flex flex-col items-center container">
                <div className="relative w-[300px] h-[300px] mb-4 shadow-lg border border-gray-300 rounded-xl">
                    <Image
                        src={hasImages ? productData.images[currentImageIndex] : "/no-image.jpg"}
                        alt={productData.name || "Product image"}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>
                <div className="flex space-x-2">
                    {productData.images && productData.images.map((img, index) => (
                        <button key={index} onClick={() => setCurrentImageIndex(index)}
                            className={`w-5 h-5 border rounded-full ${currentImageIndex === index ? 'border-[#0A1E2B] bg-[#0A1E2B]' : 'border-gray-300'}`}>
                        </button>
                    ))}
                </div>
            </div>
            <div className="w-1/2 flex flex-col">
                <h1>{productData.name}</h1>
            </div>
        </div>
    </div>
    </>
  );
};

export default ProductDetail;
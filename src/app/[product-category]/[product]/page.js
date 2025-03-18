"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import { products } from "../../data/products";

const ProductDetail = () => {
    const { "product-category": category, product } = useParams();

    const productData = products.find(
        (p) => p.slug_category === category && p.slug_product === product
    );

    // Jika produk tidak ditemukan, tampilkan 404
    if (!productData) return notFound(); 

    return (
        <div>
            <h1>{productData.name}</h1>
            <p>{productData.description}</p>
        </div>
    );
};

export default ProductDetail;
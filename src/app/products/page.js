// app/products/page.js
import ProductCard from "../components/ProductCard";
import { products } from "@/app/data/products";
const ProductsPage = () => {
    return (
        <div className="p-8 space-y-6">
        <h1 className="text-2xl font-bold">Halaman Produk</h1>
        {products.map((product, index) => (
            <ProductCard key={index} {...product} />
        ))}
        </div>
    );
};

export default ProductsPage;

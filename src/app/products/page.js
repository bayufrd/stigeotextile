// app/products/page.js
import ProductCard from "../components/ProductCard";
import ProductCategoryCard from "../components/ProductCategoryCard";
import { products } from "@/app/data/products";

const ProductsPage = () => {
    return (
        <div className="flex px-2 gap-5 py-8 h-auto">
            {/* Sidebar for Categories */}
            <ProductCategoryCard />
            {/* Products */}
            <div className="grid grid-cols-1 gap-6">
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;

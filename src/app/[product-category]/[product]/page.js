import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "../../data/products";
import Breadcrumb from "@/app/components/Breadcrumb";
import ProductImageGallery from "@/app/components/ProductImageGallery";

// This function generates all possible static params for the dynamic route
export async function generateStaticParams() {
  return products.map((product) => ({
    'product-category': product.slug_category,
    'product': product.slug_product,
  }));
}

const ProductDetail = ({ params }) => {
  const { "product-category": category, product } = params;
  
  // Find product based on category and slug
  const productData = products.find(
    (p) => p.slug_category === category && p.slug_product === product
  );

  // Check if product exists first
  if (!productData) return notFound();

  // Now safely access productData properties
  const hasImages = productData.images && productData.images.length > 0;

  return (
    <>
    <div className="relative w-full py-8 px-10 h-screen bg-amber-50">
        <Breadcrumb />
        <div className="flex flex-row pt-8">
            <div className="w-1/2 flex flex-col items-center container">
                <ProductImageGallery images={productData.images} productName={productData.name} />
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
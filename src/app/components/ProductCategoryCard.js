import { ProductCategories } from "@/app/data/productCategories";

const ProductCategoryCard = () => {
    return (
        <div className="bg-blue-500 text-white rounded-lg p-4 w-xl max-h-fit">
            <h3 className="text-lg font-bold mb-4">PRODUCTS</h3>
            <ul className="space-y-2">
                {ProductCategories.map((category, index) => (
                    <li key={category.name} className={`p-2 rounded cursor-pointer ${index === 2 ? "bg-blue-700" : "hover:bg-blue-600"}`}>
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductCategoryCard;
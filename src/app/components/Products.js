const Products = () => {
    return (
        <section id="products" className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
          <div className="text-center text-title mt-0 mb-4">
            <h1 className="text-black inline">PRODUK</h1>
            <h1 className="text-[#1F3D57] inline"> KAMI</h1>
          </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Product Card */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Nonwoven Geotextile" className="h-48 w-full object-cover mb-4 rounded" />
                        <h3 className="text-xl font-semibold">GT-200 Nonwoven Geotextile</h3>
                        <p className="text-gray-500">Premium nonwoven geotextile fabric for filtration, separation, and protection applications.</p>
                        <span className="text-xl text-blue-600 mt-4 block">$2.45/m²</span>
                    </div>
                    {/* Add more product cards here */}
                </div>
            </div>
        </section>
    );
};

export default Products;

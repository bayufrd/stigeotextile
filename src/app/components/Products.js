const Products = () => {
    return (
        <section id="products" className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <div className="text-center text-title mt-0 mb-4">
                    <h1 className="text-black inline">PRODUK</h1>
                    <h1 className="text-[#1F3D57] inline"> KAMI</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Product Card with Hover Effects */}
                    <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="overflow-hidden rounded mb-4 h-48">
                            <img 
                                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                                alt="Nonwoven Geotextile" 
                                className="h-48 w-full object-cover transition duration-500 ease-in-out hover:scale-110" 
                            />
                        </div>
                        <h3 className="text-xl font-semibold">GT-200 Nonwoven Geotextile</h3>
                        <p className="text-gray-500">Premium nonwoven geotextile fabric for filtration, separation, and protection applications.</p>
                        <span className="text-xl text-blue-600 mt-4 block">$2.45/m²</span>
                    </div>
                    
                    {/* You can duplicate this card for more products */}
                    <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="overflow-hidden rounded mb-4 h-48">
                            <img 
                                src="https://images.unsplash.com/photo-1580820267682-426da9922592?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                                alt="Woven Geotextile" 
                                className="h-48 w-full object-cover transition duration-500 ease-in-out hover:scale-110" 
                            />
                        </div>
                        <h3 className="text-xl font-semibold">GT-300 Woven Geotextile</h3>
                        <p className="text-gray-500">High-strength woven geotextile for soil reinforcement and stabilization applications.</p>
                        <span className="text-xl text-blue-600 mt-4 block">$3.25/m²</span>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="overflow-hidden rounded mb-4 h-48">
                            <img 
                                src="https://images.unsplash.com/photo-1624926571524-494fce833658?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                                alt="Geomembrane" 
                                className="h-48 w-full object-cover transition duration-500 ease-in-out hover:scale-110" 
                            />
                        </div>
                        <h3 className="text-xl font-semibold">GM-500 HDPE Geomembrane</h3>
                        <p className="text-gray-500">Impermeable HDPE geomembrane liner for containment and environmental protection.</p>
                        <span className="text-xl text-blue-600 mt-4 block">$4.75/m²</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
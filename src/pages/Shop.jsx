import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { useState } from "react";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(products.map(p => p.category).filter(Boolean))];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 font-display">Our Shop</h1>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 ${
                selectedCategory === cat
                  ? "bg-green-600 text-white shadow-green-600/20"
                  : "bg-white text-gray-500 border border-slate-200 hover:border-green-600 hover:text-green-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;

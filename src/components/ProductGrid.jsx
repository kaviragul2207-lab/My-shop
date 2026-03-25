import ProductCard from "./ProductCard";
import products from "../data/products";
import React from "react";


const ProductGrid = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 font-display">Featured Products</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((item) => (
          <ProductCard key={item.id || item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
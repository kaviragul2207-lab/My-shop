import ProductCard from "./ProductCard";
import products from "../data/products";
import React from "react";


const ProductGrid = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id || item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
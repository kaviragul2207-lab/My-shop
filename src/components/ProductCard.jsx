import { Link } from "react-router-dom";
import { useShop } from "../context/useShop";

const ProductCard = ({ product }) => {
  const { currency, addToCart } = useShop();

  return (
    <div className="border rounded-xl p-4 group hover:shadow-lg transition">
      <Link to={`/product/${product.id}`}>
        {/* Image */}
        <div className="overflow-hidden rounded-lg bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-50 object-contain group-hover:scale-110 transition duration-500"
          />
        </div>

        {/* Info */}
        <div className="mt-4">
          <h3 className="font-semibold text-lg text-gray-800 line-clamp-1 group-hover:text-green-600 transition">{product.name}</h3>
          <p className="text-green-600 font-bold">{currency}{product.price}</p>
        </div>
      </Link>

      {/* Hover Button */}
      <button 
        onClick={() => addToCart(product.id)}
        className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg opacity-0 group-hover:opacity-100 transition active:scale-95"
      >
        Add to Cart
      </button>
      
    </div>
  );
};

export default ProductCard;

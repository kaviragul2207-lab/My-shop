import { Link } from "react-router-dom";
import { useShop } from "../context/useShop";

const ProductCard = ({ product }) => {
  const { currency, addToCart } = useShop();

  return (
    <div className="bg-white border border-slate-100 rounded-4xl p-3 sm:p-5 group hover:shadow-2xl hover:shadow-green-900/5 transition-all duration-500 flex flex-col h-full active:scale-[0.98]">
      <Link to={`/product/${product.id}`} className="flex flex-col flex-1">
        {/* Image Container */}
        <div className="relative aspect-square rounded-3xl overflow-hidden bg-slate-50 border border-slate-50 group-hover:bg-white transition-colors duration-500">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
          />
          {/* Badge */}
          <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[10px] font-black uppercase tracking-tighter text-green-600 border border-green-100/50 shadow-sm">
             Natural
          </div>
        </div>

        {/* Info */}
        <div className="mt-5 space-y-1.5 px-1">
          <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span>Fast Delivery</span>
          </div>
          <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 line-clamp-1 group-hover:text-green-600 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-black text-green-600">{currency}{product.price}</span>
            <span className="text-xs text-slate-400 line-through font-medium">{currency}{Math.round(product.price * 1.2)}</span>
          </div>
        </div>
      </Link>

      {/* Action Button */}
      <div className="mt-5">
        <button 
          onClick={(e) => {
            e.preventDefault();
            addToCart(product.id);
          }}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3.5 sm:py-4 rounded-2xl font-bold text-sm transition-all shadow-xl shadow-green-600/10 hover:shadow-green-600/30 active:scale-95 opacity-100 md:opacity-0 md:group-hover:opacity-100 transform md:translate-y-2 md:group-hover:translate-y-0"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { assets } from "../assets/assets";
import { useShop } from "../context/useShop";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, getCartAmount, delivery_fee } = useShop();

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      if (cartItems[items] > 0) {
        tempData.push({
          _id: items,
          quantity: cartItems[items]
        })
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  const totalAmount = getCartAmount();
  const finalTotal = totalAmount > 0 ? totalAmount + delivery_fee : 0;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Shopping Cart</h1>

        {cartData.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-4">
              {cartData.map((item) => {
                const productData = products.find((p) => p._id === item._id);
                if (!productData) return null;
                return (
                  <div key={item._id} className="flex gap-6 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 items-center">
                    <img src={Array.isArray(productData.image) ? productData.image[0] : productData.image} alt={productData.name} className="w-24 h-24 object-contain rounded-lg shadow-inner bg-slate-50" />
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-gray-800">{productData.name}</h3>
                      <p className="text-green-600 font-bold text-lg mt-1">{currency}{productData.price}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <label className="text-sm text-gray-500">Qty:</label>
                        <input 
                          type="number" 
                          min="1"
                          value={item.quantity} 
                          onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, Number(e.target.value))}
                          className="w-16 border-2 border-gray-100 rounded-lg px-3 py-1 focus:border-green-500 outline-none transition font-medium" 
                        />
                      </div>
                    </div>
                    <button 
                      onClick={() => updateQuantity(item._id, 0)}
                      className="p-3 text-red-500 bg-red-50 hover:bg-red-100 hover:text-red-600 rounded-xl transition cursor-pointer group"
                      title="Remove item">
                      <Trash2 size={22} className="group-hover:scale-110 transition" />
                    </button>
                  </div>
                )
              })}
            </div>

            {/* Summary */}
            <div className="bg-white p-8 rounded-2xl h-fit shadow-lg border border-gray-50">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>
              <div className="space-y-4 mb-6 border-b pb-6 text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-gray-800">{currency}{totalAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span className="font-semibold text-gray-800">{currency}{delivery_fee}</span>
                </div>
              </div>
              <div className="flex justify-between font-bold text-2xl text-gray-900 mb-8">
                <span>Total:</span>
                <span className="text-green-600">{currency}{finalTotal}</span>
              </div>
              <Link 
                to="/checkout" 
                className="block w-full bg-green-600 text-white py-4 rounded-xl text-center font-bold text-lg shadow-lg shadow-green-200 hover:bg-green-700 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">Your cart is empty</p>
            <Link to="/shop" className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg">
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

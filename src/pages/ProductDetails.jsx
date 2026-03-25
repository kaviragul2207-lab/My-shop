import { useParams, Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import products from '../data/products'
import { ShoppingCart, ArrowLeft, Star, ShieldCheck, Truck } from 'lucide-react'
import { useShop } from '../context/useShop'

export default function ProductDetails() {
  const { _id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const { currency, addToCart } = useShop()

  useEffect(() => {
    const foundProduct = products.find(p => p.id == _id)
    setProduct(foundProduct)
    window.scrollTo(0, 0)
  }, [_id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
          <Link to="/shop" className="text-green-600 mt-4 inline-block hover:underline">Back to Shop</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Breadcrumb */}
        <Link to="/shop" className="flex items-center gap-2 text-gray-500 hover:text-green-600 transition mb-8 w-fit group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition" />
          <span>Back to Shop</span>
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Product Image Section */}
          <div className="space-y-4">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-inner">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain p-8 hover:scale-110 transition duration-500"
              />
            </div>
          </div>

          {/* Product Info Section */}
          <div className="flex flex-col">
            <div className="mb-6">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                Fresh & Organic
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 mb-2">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <span className="text-gray-400 border-l pl-4">4.8 (120 Reviews)</span>
              </div>

              <div className="flex flex-wrap items-baseline gap-4 mb-8">
                <p className="text-3xl sm:text-4xl font-black text-green-600">{currency}{product.price}</p>
                <p className="text-lg sm:text-xl text-gray-400 line-through">{currency}{Math.floor(product.price * 1.2)}</p>
                <span className="text-red-500 font-bold bg-red-50 px-2 py-1 rounded text-sm">20% OFF</span>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {product.description || "Indulge in the purest flavors of nature with our carefully selected organic products. Farm-fresh, pesticide-free, and delivered with love to ensure your family gets the very best quality nourishment."}
              </p>
            </div>

            {/* Features Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="bg-white p-2 rounded-lg shadow-sm text-green-600">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-sm font-medium text-gray-700">Quality Certified</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="bg-white p-2 rounded-lg shadow-sm text-green-600">
                  <Truck size={20} />
                </div>
                <span className="text-sm font-medium text-gray-700">Fast Delivery</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button 
                onClick={() => addToCart(product.id)}
                className="flex-1 bg-green-600 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-green-700 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl shadow-green-100"
              >
                <ShoppingCart size={24} />
                Add to Cart
              </button>
              <button 
                onClick={() => {
                  addToCart(product.id);
                  navigate('/cart');
                }}
                className="flex-1 bg-gray-900 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center"
              >
                Buy It Now
              </button>
            </div>

          </div>
        </div>

        {/* Similar Products Placeholder */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">Similar Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-60 grayscale pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded-3xl animate-pulse"></div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}


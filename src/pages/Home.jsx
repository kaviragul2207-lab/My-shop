import ProductGrid from "../components/ProductGrid";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* HERO SECTION */}
      <section 
        className="relative h-[80vh] min-h-[600px] flex items-center bg-cover bg-center overflow-hidden" 
        style={{ backgroundImage: `url(${assets.hero})` }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="max-w-2xl space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-400 text-sm font-bold tracking-wider uppercase">
              Fresh Harvest 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tighter">
              Purely Organic, <br />
              <span className="text-green-500">Naturally Fresh</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-lg leading-relaxed font-medium">
              We bring the finest selection of hand-picked seasonal fruits and organic vegetables directly from local farms overflow.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => navigate('/shop')}
                className="group px-10 py-5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl flex items-center gap-3 transition-all duration-300 shadow-2xl shadow-green-600/30 animate-pulse-slow active:scale-95"
              >
                Start Shopping <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl backdrop-blur-md border border-white/20 transition-all active:scale-95"
              >
                Our Story
              </button>
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-green-500/10 rounded-full blur-[100px] animate-pulse"></div>
      </section>


      {/* CATEGORY */}
      <section className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {["Fruits", "Vegetables", "Dairy", "Snacks"].map((cat) => (
          <div
            key={cat}
            className="bg-gray-400 shadow-md rounded-xl p-6 text-center hover:shadow-lg cursor-pointer"
          >
            <h3 className="font-semibold">{cat}</h3>
          </div>
        ))}                                                                                           
      </section>

      {/* PROMO BANNER */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6">
        <div className="bg-green-200 p-8 rounded-xl">
          <h2 className="text-2xl font-bold">50% OFF</h2>
          <p>On Fresh Fruits</p>
        </div>

        <div className="bg-yellow-200 p-8 rounded-xl">
          <h2 className="text-2xl font-bold">Buy 1 Get 1</h2>
          <p>On Snacks</p>
        </div>
      </section>

      {/* PRODUCTS */}
      <ProductGrid />

    </>
  )
}

import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, User, Search, Menu } from "lucide-react";
import { assets } from "../assets/assets";
import { useShop } from "../context/useShop";
import { useState } from "react";

const Navbar = () => {
  const { getCartCount } = useShop();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src={assets.logo} 
            alt="My Market Logo" 
            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" 
          />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-tight">
            My <span className="text-gray-900">Market</span>
          </h1>
        </Link>

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex gap-8 text-gray-700 font-semibold uppercase tracking-wider text-xs">
          <NavItem to="/" label="Home" end />
          <NavItem to="/shop" label="Shop" />
          <NavItem to="/about" label="About" />
          <NavItem to="/contact" label="Contact" />
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Search Placeholder */}
          <button className="hidden sm:flex items-center text-gray-500 hover:text-green-600 transition-colors">
            <Search size={20} strokeWidth={2.5} />
          </button>

          {/* User Profile */}
          <Link to="/login" className="text-gray-700 hover:text-green-600 transition-colors">
            <User size={22} strokeWidth={2.5} />
          </Link>

          {/* Cart with Badge */}
          <Link to="/cart" className="relative text-gray-700 hover:text-green-600 transition-colors">
            <ShoppingBag size={22} strokeWidth={2.5} />
            {getCartCount() > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-green-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white animate-fade-in-up">
                {getCartCount()}
              </span>
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-gray-700 p-1 hover:text-green-600 transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-60 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)}>
        <div 
          className={`absolute right-0 top-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 flex flex-col h-full">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-xl font-bold text-gray-900 font-display">Menu</h2>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Search size={20} className="rotate-45" /> {/* Using Search as a cross for simplicity or I could import X */}
              </button>
            </div>

            <div className="flex flex-col gap-1">
              <MobileNavItem to="/" label="Home" onClick={() => setIsMenuOpen(false)} />
              <MobileNavItem to="/shop" label="Shop" onClick={() => setIsMenuOpen(false)} />
              <MobileNavItem to="/about" label="About Us" onClick={() => setIsMenuOpen(false)} />
              <MobileNavItem to="/contact" label="Contact" onClick={() => setIsMenuOpen(false)} />
            </div>

            <div className="mt-auto pt-10 border-t border-gray-100">
              <p className="text-xs text-gray-400 text-center font-medium uppercase tracking-widest mb-4">Account</p>
              <div className="grid grid-cols-2 gap-4">
                <Link 
                  to="/login" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gray-50 hover:bg-green-50 hover:text-green-600 transition-all border border-transparent hover:border-green-100"
                >
                  <User size={20} />
                  <span className="text-xs font-bold mt-2">Login</span>
                </Link>
                <Link 
                  to="/cart" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gray-50 hover:bg-green-50 hover:text-green-600 transition-all border border-transparent hover:border-green-100"
                >
                  <ShoppingBag size={20} />
                  <span className="text-xs font-bold mt-2">Cart</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const MobileNavItem = ({ to, label, onClick }) => (
  <NavLink 
    to={to} 
    onClick={onClick}
    className={({ isActive }) => 
      `flex items-center justify-between p-4 rounded-2xl font-bold text-lg transition-all ${
        isActive ? 'bg-green-600 text-white shadow-lg shadow-green-200' : 'text-gray-600 hover:bg-green-50 hover:text-green-600'
      }`
    }
  >
    {label}
    <span className="opacity-20">→</span>
  </NavLink>
);

const NavItem = ({ to, label, end = false }) => (
  <NavLink 
    to={to} 
    end={end}
    className={({ isActive }) => 
      `relative py-1 transition-colors duration-300 ${isActive ? 'text-green-600' : 'hover:text-green-600'}`
    }
  >
    {({ isActive }) => (
      <>
        {label}
        {isActive && (
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 rounded-full animate-fade-in-up"></span>
        )}
      </>
    )}
  </NavLink>
);

export default Navbar;
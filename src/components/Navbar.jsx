import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, User, Search, Menu } from "lucide-react";
import { assets } from "../assets/assets";
import { useShop } from "../context/useShop";

const Navbar = () => {
  const { getCartCount } = useShop();

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
          <button className="md:hidden text-gray-700 p-1">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

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
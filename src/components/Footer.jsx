import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16 sm:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">MyShop</h3>
            <p className="text-gray-400 mb-4">Your one-stop shop for fresh and organic products delivered to your doorstep.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-green-400"><Facebook size={20} /></a>
              <a href="#" className="hover:text-green-400"><Twitter size={20} /></a>
              <a href="#" className="hover:text-green-400"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-green-400">Home</Link></li>
              <li><Link to="/shop" className="hover:text-green-400">Shop</Link></li>
              <li><Link to="/about" className="hover:text-green-400">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-lg mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-400">Fruits</a></li>
              <li><a href="#" className="hover:text-green-400">Vegetables</a></li>
              <li><a href="#" className="hover:text-green-400">Dairy</a></li>
              <li><a href="#" className="hover:text-green-400">Snacks</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex gap-2">
                <MapPin size={20} className="text-green-400" />
                <span>123 Market Street, City, Coimbatore</span>
              </li>
              <li className="flex gap-2">
                <Phone size={20} className="text-green-400" />
                <span>+91 6380644509</span>
              </li>
              <li className="flex gap-2">
                <Mail size={20} className="text-green-400" />
                <span>info@myshop.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            &copy; 2026 MyShop. All rights reserved. | <a href="#" className="hover:text-green-400">Privacy Policy</a> | <a href="#" className="hover:text-green-400">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

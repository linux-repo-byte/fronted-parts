import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-[#FFF4D6] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Too Lazy to Buy" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/products"
              className="text-gray-800 hover:text-[#A8B456] transition-colors font-medium"
            >
              Products
            </Link>
            <Link 
              to="/contact"
              className="text-gray-800 hover:text-[#A8B456] transition-colors font-medium"
            >
              Contact
            </Link>
            <Link 
              to="/about"
              className="text-gray-800 hover:text-[#A8B456] transition-colors font-medium"
            >
              About
            </Link>
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-[#FFB380] transition-colors flex items-center gap-1"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://pathao.com/foods"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFB380] hover:bg-[#FF9F5C] text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105"
            >
              Order via Pathao 
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

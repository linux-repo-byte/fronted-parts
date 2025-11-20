import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FFF4D6] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Too Lazy to Buy" className="h-16 w-auto" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-gray-800 hover:text-[#A8B456] font-medium">Products</Link>
            
            <Link to="/about" className="text-gray-800 hover:text-[#A8B456] font-medium">About</Link>
            <Link to="/contact" className="text-gray-800 hover:text-[#A8B456] font-medium">Contact</Link>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-[#FFB380] flex items-center gap-1">
              <Instagram className="w-5 h-5" /> Instagram
            </a>
            <a href="https://pathao.com/foods" target="_blank" rel="noopener noreferrer" className="bg-[#FFB380] hover:bg-[#FF9F5C] text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105">
              Order via Pathao
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#FFF4D6] shadow-lg transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col space-y-6 mt-8 px-6">
          <Link to="/products" className="text-gray-800 hover:text-[#A8B456] font-medium" onClick={() => setIsOpen(false)}>Products</Link>
          
          <Link to="/about" className="text-gray-800 hover:text-[#A8B456] font-medium" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="text-gray-800 hover:text-[#A8B456] font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
        
          <a href="https://pathao.com/foods" target="_blank" rel="noopener noreferrer" className="bg-[#FFB380] hover:bg-[#FF9F5C] text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105" onClick={() => setIsOpen(false)}>
            Order via Pathao
          </a>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setIsOpen(false)} />}
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Instagram } from 'lucide-react';
import logo from '../assets/logo.png';
import lagarauLogo from '../assets/lagarau-logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#A8B456] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* This is the Logo */}
          <div className="mb-6 md:mb-0">
            <img 
              src={logo} 
              alt="Too Lazy to Buy" 
              className="h-16 w-auto opacity-90"
            />
          </div>

          {/* Here is the Links */}
          <div className="flex flex-wrap justify-center gap-8 text-lg">
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#FFF4D6] transition-colors flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
            <a 
              href="https://pathao.com/foods" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#FFF4D6] transition-colors"
            >
              Pathao Foods
            </a>
            <a 
              href="/contact" 
              className="hover:text-[#FFF4D6] transition-colors"
            >
              Contact
            </a>
            <a 
              href="/about" 
              className="hover:text-[#FFF4D6] transition-colors"
            >
              About
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center space-y-4">
          <p className="text-sm opacity-80">
            © 2025 Too Lazy to Buy. All rights reserved. Made for the lazy ones. 😴
          </p>
          
          {/* Powered by Lagarau */}
          <div className="flex items-center justify-center gap-2 opacity-90">
            <span className="text-sm">Powered by</span>
            <img 
              src={lagarauLogo} 
              alt="Lagarau" 
              className="h-6 w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
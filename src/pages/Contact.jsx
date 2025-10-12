import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Instagram, Package } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="relative bg-[#FFF4D6] py-20 min-h-[80vh] flex items-center overflow-hidden">
        {/* Background decorative elements - images instead of emojis */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 opacity-10 rounded-full overflow-hidden float-animation">
            <img src="https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=100&h=100&fit=crop" alt="Noodles" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-40 right-20 w-16 h-16 opacity-10 rounded-full overflow-hidden float-animation-delay">
            <img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=100&h=100&fit=crop" alt="Curry" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 opacity-10 rounded-full overflow-hidden float-animation">
            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop" alt="Salad" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-40 right-1/3 w-20 h-20 opacity-10 rounded-full overflow-hidden float-animation-delay">
            <img src="https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=100&h=100&fit=crop" alt="Pasta" className="w-full h-full object-cover" />
          </div>
          
          {/* Squiggly shapes */}
          <div className="absolute top-10 right-10 w-40 h-40 bg-[#FFB380] opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-60 h-60 bg-[#A8B456] opacity-10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 boba-font">
            Order or Reach Us
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-700 mb-12 boba-font">
            We're Too Lazy for forms too 😴
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Order via Pathao Button */}
            <a
              href="https://pathao.com/foods"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#FFB380] hover:bg-[#FF9F5C] text-white px-10 py-5 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-xl"
            >
              <Package className="w-6 h-6" />
              Order via Pathao Foods
            </a>

            {/* Instagram Message Button */}
            <a
              href="https://www.instagram.com/direct/inbox/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#A8B456] hover:bg-[#96A145] text-white px-10 py-5 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-xl"
            >
              <Instagram className="w-6 h-6" />
              Message us on Instagram
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-16 space-y-4">
            <p className="text-lg text-gray-700">
              📱 Follow us for daily meal inspiration
            </p>
            <p className="text-lg text-gray-700">
              🚚 Fast delivery via Pathao Foods
            </p>
            <p className="text-lg text-gray-700">
              💬 DM us anytime - we reply when we're not too lazy 😉
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
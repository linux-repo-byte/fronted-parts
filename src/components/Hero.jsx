import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-[#FFF4D6] py-20 overflow-hidden">
      {}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#FFB380] opacity-20 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#A8B456] opacity-20 rounded-full blur-3xl float-animation-delay"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-[#FFB380] opacity-10 rounded-full blur-2xl float-animation"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 boba-font">
            Too Lazy to Cook?
            <br />
            <span className="text-[#A8B456]">We Got You.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Pre-prepped meal kits you can cook in minutes.
          </p>
          <a
            href="https://pathao.com/foods"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FFB380] hover:bg-[#FF9F5C] text-white px-10 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg"
          >
            Order Now
          </a>
        </div>

        {/* Floating food elements with images */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
          <div className="w-32 h-32 bg-white rounded-3xl shadow-lg overflow-hidden float-animation">
            <img src="https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=200&h=200&fit=crop" alt="Noodles" className="w-full h-full object-cover" />
          </div>
          <div className="w-32 h-32 bg-white rounded-3xl shadow-lg overflow-hidden float-animation-delay">
            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop" alt="Salad" className="w-full h-full object-cover" />
          </div>
          <div className="w-32 h-32 bg-white rounded-3xl shadow-lg overflow-hidden float-animation">
            <img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=200&h=200&fit=crop" alt="Curry" className="w-full h-full object-cover" />
          </div>
          <div className="w-32 h-32 bg-white rounded-3xl shadow-lg overflow-hidden float-animation-delay">
            <img src="https://images.unsplash.com/photo-1704384009560-2b321c938d38?w=200&h=200&fit=crop" alt="Stir Fry" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
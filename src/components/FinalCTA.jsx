import React from 'react';

const FinalCTA = () => {
  return (
    <div className="relative bg-[#FFF4D6] py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-[#A8B456] opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#FFB380] opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 boba-font">
          Too Lazy? Just Order Already.
        </h2>
        <p className="text-xl text-gray-700 mb-10">
          Your future self will thank you. 😴
        </p>
        <a
          href="https://pathao.com/foods"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#FFB380] hover:bg-[#FF9F5C] text-white px-12 py-5 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-xl"
        >
          Order via Pathao Foods
        </a>
      </div>
    </div>
  );
};

export default FinalCTA;

import React from 'react';
import { Scissors, Sparkles, Zap } from 'lucide-react';

const LazyPromise = () => {
  const promises = [
    {
      icon: Scissors,
      text: 'No chopping.'
    },
    {
      icon: Sparkles,
      text: 'No mess.'
    },
    {
      icon: Zap,
      text: 'Just cook and flex.'
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 boba-font">
          The Lazy Promise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {promises.map((promise, index) => {
            const IconComponent = promise.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <IconComponent className="w-16 h-16 text-[#FFB380]" strokeWidth={1.5} />
                </div>
                <p className="text-2xl font-bold text-gray-900 boba-font">
                  {promise.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LazyPromise;
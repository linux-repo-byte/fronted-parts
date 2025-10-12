import React from 'react';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

const PromoBanner = () => {
  return (
    <div className="bg-[#00754A] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif', lineHeight: '1.1' }}>
              THE BEST WAY<br />TO COOK DINNER<br />JUST GOT BETTER
            </h2>
            <div className="mb-6">
              <p className="text-lg font-bold mb-2">NEW:</p>
              <div className="flex items-center">
                <Check className="h-5 w-5 mr-2" />
                <span className="text-lg">3x More Salmon Recipes</span>
              </div>
            </div>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-md font-medium mb-4">
              See Pricing & Plans
            </Button>
            <p className="text-sm opacity-90">
              Flexible plans. No commitment. Skip or cancel anytime.
            </p>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1588077699842-b906a1c3ff23?w=400&q=80" 
                alt="Meal 1"
                className="w-full h-48 object-cover rounded-full shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80" 
                alt="Meal 2"
                className="w-full h-48 object-cover rounded-full shadow-lg mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1586032340364-03f75289e661?w=400&q=80" 
                alt="Meal 3"
                className="w-full h-48 object-cover rounded-full shadow-lg -mt-4"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-9xl font-bold opacity-20" style={{ fontFamily: 'Georgia, serif' }}>
              YUM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;

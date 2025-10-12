import React from 'react';
import { MousePointer, Package, ChefHat, Sparkles } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Pick',
      icon: MousePointer,
      description: 'Choose your favorite meal'
    },
    {
      title: 'Get',
      icon: Package,
      description: 'We deliver to your door'
    },
    {
      title: 'Cook',
      icon: ChefHat,
      description: 'Ready in minutes'
    },
    {
      title: 'Done',
      icon: Sparkles,
      description: 'Enjoy your meal'
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 boba-font">
          Pick. Get. Cook. Done.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-[#FFF4D6] rounded-full flex items-center justify-center">
                  <IconComponent className="w-12 h-12 text-[#A8B456]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 boba-font">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
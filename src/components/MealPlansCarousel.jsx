import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { mealPlans } from '../mockData';

const MealPlansCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 4;

  const nextSlide = () => {
    if (currentIndex < mealPlans.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-12 h-12 disabled:opacity-50 hover:bg-gray-100"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        disabled={currentIndex >= mealPlans.length - visibleCards}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-12 h-12 disabled:opacity-50 hover:bg-gray-100"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Carousel Container */}
      <div className="overflow-hidden px-12">
        <div 
          className="flex transition-transform duration-300 ease-in-out gap-4"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
        >
          {mealPlans.map((plan) => (
            <div 
              key={plan.id}
              className="flex-shrink-0 cursor-pointer group"
              style={{ width: `calc(${100 / visibleCards}% - 12px)` }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105">
                <img 
                  src={plan.image} 
                  alt={plan.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-1">{plan.title}</h3>
                  <div className="inline-block">
                    <span className="bg-[#91C11E] text-gray-900 text-xs font-bold px-3 py-1 rounded">
                      {plan.subtitle}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealPlansCarousel;

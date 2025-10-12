import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Clock, Flame, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OurMenus = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Meals' },
    { id: 'meat', name: 'Meat & Veggies' },
    { id: 'veggie', name: 'Vegetarian' },
    { id: 'family', name: 'Family Friendly' },
    { id: 'fit', name: 'Fit & Wholesome' },
  ];

  const meals = [
    {
      id: 1,
      name: 'Garlic Butter Steak with Mashed Potatoes',
      category: 'meat',
      image: 'https://images.unsplash.com/photo-1588077699842-b906a1c3ff23?w=500&q=80',
      prepTime: 30,
      calories: 680,
      difficulty: 'Medium',
      tags: ['High Protein', 'Premium']
    },
    {
      id: 2,
      name: 'Mediterranean Veggie Bowl',
      category: 'veggie',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80',
      prepTime: 25,
      calories: 420,
      difficulty: 'Easy',
      tags: ['Veggie', 'Low Cal']
    },
    {
      id: 3,
      name: 'Crispy Chicken Tacos',
      category: 'family',
      image: 'https://images.unsplash.com/photo-1586032340364-03f75289e661?w=500&q=80',
      prepTime: 20,
      calories: 550,
      difficulty: 'Easy',
      tags: ['Kid Friendly', 'Quick']
    },
    {
      id: 4,
      name: 'Salmon with Roasted Vegetables',
      category: 'fit',
      image: 'https://images.unsplash.com/photo-1606756790138-261d2b21cd75?w=500&q=80',
      prepTime: 35,
      calories: 480,
      difficulty: 'Medium',
      tags: ['Fit & Wholesome', 'Omega-3']
    },
    {
      id: 5,
      name: 'Spicy Beef Stir Fry',
      category: 'meat',
      image: 'https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?w=500&q=80',
      prepTime: 25,
      calories: 590,
      difficulty: 'Easy',
      tags: ['Quick', 'Spicy']
    },
    {
      id: 6,
      name: 'Veggie Pasta Primavera',
      category: 'veggie',
      image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=500&q=80',
      prepTime: 30,
      calories: 520,
      difficulty: 'Medium',
      tags: ['Veggie', 'Comfort Food']
    },
    {
      id: 7,
      name: 'Turkey Meatballs with Spaghetti',
      category: 'family',
      image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=500&q=80',
      prepTime: 35,
      calories: 610,
      difficulty: 'Medium',
      tags: ['Kid Friendly', 'Classic']
    },
    {
      id: 8,
      name: 'Grilled Chicken Salad',
      category: 'fit',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80',
      prepTime: 20,
      calories: 380,
      difficulty: 'Easy',
      tags: ['Low Cal', 'High Protein']
    },
  ];

  const filteredMeals = selectedCategory === 'all' 
    ? meals 
    : meals.filter(meal => meal.category === selectedCategory);

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-[#F7F5F0] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            This Week's Menu
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our chef-curated recipes with fresh, pre-portioned ingredients delivered to your door.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white py-8 border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full px-6 py-2 font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-[#91C11E] text-white hover:bg-[#7BA818]'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Meals Grid */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMeals.map((meal) => (
              <div key={meal.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={meal.image} 
                    alt={meal.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 space-y-2">
                    {meal.tags.map((tag, i) => (
                      <div key={i} className="bg-[#91C11E] text-gray-900 text-xs font-bold px-3 py-1 rounded">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#91C11E] transition-colors">
                  {meal.name}
                </h3>
                
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{meal.prepTime} min</span>
                  </div>
                  <div className="flex items-center">
                    <Flame className="h-4 w-4 mr-1" />
                    <span>{meal.calories} cal</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurMenus;

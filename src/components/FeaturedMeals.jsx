import React from 'react';

const FeaturedMeals = () => {
  const meals = [
    {
      id: 1,
      name: 'Creamy Pasta',
      price: 'Rs. 450',
      image: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=400&h=300&fit=crop',
      description: 'Rich and creamy pasta ready in 10 mins'
    },
    {
      id: 2,
      name: 'Spicy Curry',
      price: 'Rs. 550',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
      description: 'Aromatic curry with pre-cut veggies'
    },
    {
      id: 3,
      name: 'Fresh Salad Bowl',
      price: 'Rs. 350',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      description: 'Healthy and refreshing meal bowl'
    },
    {
      id: 4,
      name: 'Noodle Box',
      price: 'Rs. 400',
      image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop',
      description: 'Asian-style noodles, just add hot water'
    }
  ];

  return (
    <div className="bg-[#FFF4D6] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4 boba-font">
          Featured Meals
        </h2>
        <p className="text-center text-gray-700 mb-12 text-lg">
          Too lazy to decide? Start with these.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {meals.map((meal) => (
            <div 
              key={meal.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img src={meal.image} alt={meal.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {meal.name}
                </h3>
                <p className="text-gray-600 text-center mb-4 text-sm">
                  {meal.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#A8B456]">
                    {meal.price}
                  </span>
                  <button className="bg-[#FFB380] hover:bg-[#FF9F5C] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/products"
            className="inline-block bg-[#A8B456] hover:bg-[#96A145] text-white px-8 py-3 rounded-full text-lg font-bold transition-all transform hover:scale-105"
          >
            See Full Menu
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMeals;
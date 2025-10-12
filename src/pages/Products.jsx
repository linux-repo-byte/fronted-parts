import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Products = () => {
  // Product data - will be fetched from backend later
  const products = [
    {
      id: 1,
      name: 'Creamy Pasta',
      price: 'Rs. 450',
      image: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=400&h=300&fit=crop',
      description: 'Rich and creamy pasta with pre-cut vegetables, ready in 10 minutes. Perfect for lazy evenings.'
    },
    {
      id: 2,
      name: 'Spicy Curry',
      price: 'Rs. 550',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
      description: 'Aromatic curry with pre-cut veggies and spices. Just add water and cook for 12 minutes.'
    },
    {
      id: 3,
      name: 'Fresh Salad Bowl',
      price: 'Rs. 350',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      description: 'Healthy and refreshing meal bowl with pre-washed greens and dressing included.'
    },
    {
      id: 4,
      name: 'Noodle Box',
      price: 'Rs. 400',
      image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop',
      description: 'Asian-style noodles with sauce packet. Just add hot water and wait 5 minutes.'
    },
    {
      id: 5,
      name: 'Grilled Chicken Rice',
      price: 'Rs. 600',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
      description: 'Pre-marinated chicken with fragrant rice. Cook in 15 minutes for a complete meal.'
    },
    {
      id: 6,
      name: 'Veggie Stir Fry',
      price: 'Rs. 380',
      image: 'https://images.unsplash.com/photo-1704384009560-2b321c938d38?w=400&h=300&fit=crop',
      description: 'Colorful pre-cut vegetables with stir fry sauce. Ready in 8 minutes on high heat.'
    },
    {
      id: 7,
      name: 'Biryani Kit',
      price: 'Rs. 650',
      image: 'https://images.unsplash.com/photo-1628521061262-19b5cdb7eee5?w=400&h=300&fit=crop',
      description: 'Authentic biryani with all spices and pre-cut ingredients. Cook for 20 minutes.'
    },
    {
      id: 8,
      name: 'Soup & Bread',
      price: 'Rs. 320',
      image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=400&h=300&fit=crop',
      description: 'Hearty soup with crusty bread. Just heat and eat in 5 minutes.'
    },
    {
      id: 9,
      name: 'Taco Kit',
      price: 'Rs. 480',
      image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400&h=300&fit=crop',
      description: 'Mexican taco kit with pre-seasoned meat and fresh toppings. Ready in 10 minutes.'
    },
    {
      id: 10,
      name: 'Pizza Base Kit',
      price: 'Rs. 420',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
      description: 'Make your own pizza with ready dough, sauce, and toppings. Bake for 12 minutes.'
    },
    {
      id: 11,
      name: 'Breakfast Bowl',
      price: 'Rs. 290',
      image: 'https://images.unsplash.com/photo-1645517976245-569a91016f79?w=400&h=300&fit=crop',
      description: 'Nutritious breakfast bowl with oats, fruits, and nuts. Add milk and enjoy.'
    },
    {
      id: 12,
      name: 'BBQ Platter',
      price: 'Rs. 720',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
      description: 'Mixed BBQ platter with pre-marinated meats and sides. Grill for 15 minutes.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-[#FFF4D6] py-16 overflow-hidden">
        {/* Background shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-48 h-48 bg-[#FFB380] opacity-10 rounded-full blur-2xl float-animation"></div>
          <div className="absolute bottom-10 left-20 w-64 h-64 bg-[#A8B456] opacity-10 rounded-full blur-3xl float-animation-delay"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 boba-font text-center">
            Our Products
          </h1>
          <p className="text-xl text-gray-700 text-center max-w-2xl mx-auto">
            Too lazy to browse? Pick any. They're all easy. 😴
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer border-2 border-gray-100"
              style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}
            >
              <div className="h-48 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center boba-font">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-center mb-4 text-sm min-h-[60px]">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-[#A8B456]">
                    {product.price}
                  </span>
                </div>
                <a
                  href="https://pathao.com/foods"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#FFB380] hover:bg-[#FF9F5C] text-white px-4 py-3 rounded-full text-center font-bold transition-all transform hover:scale-105"
                >
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#FFF4D6] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 boba-font">
            Still deciding? Just order already! 🛒
          </h2>
          <a
            href="https://pathao.com/foods"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FFB380] hover:bg-[#FF9F5C] text-white px-10 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg"
          >
            Order via Pathao Foods
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
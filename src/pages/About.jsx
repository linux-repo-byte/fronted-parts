import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, Zap, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  
  const teamMembers = [
    { name: 'Raag KC', role: 'Founder', image: require('../assets/founder.png') },
    { name: 'Aayush Bartaula', role: 'Developer', image: require('../assets/aayush.jpeg') },
    { name: 'Milli Rai', role: 'Digital Marketing', image: require('../assets/chef.png') },
    { name: 'Krimila Kusle Thapa', role: 'Graphics Designer', image: require('../assets/customer.png') },
    { name: 'Bipul Thapa', role: 'Product Developer', image: require('../assets/bipul.jpeg') },
    { name: 'Ureka Gautam', role: 'Developer', image: require('../assets/marketing.png') },
    { name: 'Head Chef', role: 'Head Chef', image: require('../assets/chef.png') },
    { name: 'Shahil Hussain', role: 'Developer', image: require('../assets/customer.png') }
  ];

  // Update items per page based on window size
  React.useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(4); // lg: 4 items
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(3); // md: 3 items
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2); // sm: 2 items
      } else {
        setItemsPerPage(1); // mobile: 1 item
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const maxIndex = Math.max(0, teamMembers.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const newIndex = Math.max(0, prev - 1);
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = Math.min(maxIndex, prev + 1);
      return newIndex;
    });
  };

  // Reset to first page when items per page changes
  React.useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerPage]);

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
<div
  className="relative z-0 bg-[#FFF4D6] py-24 min-h-[60vh] flex items-center overflow-hidden"
  style={{
    backgroundImage: `url(${require('../assets/pattern.png')})`,
    backgroundSize: '300px 300px',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
  }}
>
  {/* Section overlay images */}
  <div className="pointer-events-none select-none absolute inset-0">
    <img
      src={require('../assets/Cutting board with pear and utensils.png')}
      alt="Cutting board with pear"
      className="absolute -left-[1vw] top-[-5vw] h-full w-auto scale-[1.4] rotate-[4deg] transition-opacity duration-700 ease-out opacity-0 sm:opacity-30 md:opacity-60 lg:opacity-100 hidden lg:block"
    />
    <img
      src={require('../assets/Avocado with vegetables and basil.png')}
      alt="Avocado with vegetables"
      className="absolute -right-[1vw] top-[2vw] h-full w-auto scale-[1.5] rotate-[3deg] hidden md:block"
    />
  </div>

  {/* Blurred text panel for readability */}
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center justify-center">
    <div className="w-full bg-white/50 backdrop-blur-xl rounded-[2rem] px-6 sm:px-20 py-10 mb-6 shadow-sm">
      <h1 className="text-6xl font-bold text-gray-900 mb-4 boba-font leading-tight break-words">
  About Too Lazy To Buy
</h1>

      <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
        We're here for the lazy ones who still want delicious meals without the hassle of what to cook and how to.
      </p>
    </div>
    <a
      href="/products"
      className="inline-block bg-[#FFB380] hover:bg-[#FF9F5C] text-white px-10  py-4  rounded-full text-base sm:text-lg font-bold transition-all transform hover:scale-105 shadow-lg mt-2"
    >
      Order Now
    </a>
  </div>
</div>


      {/* Story Section */}
      <div className="relative z-0 bg-white py-20 overflow-hidden">
        {/* Right framed citrus above background */}
        <img
          src={require('../assets/ramen.png')}
          alt="Framed citrus"
          className="pointer-events-none select-none absolute right-[0.5vw] top-[-5vw] h-full w-auto scale-[1.4] hidden md:block"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2x1 overflow-hidden shadow-2xl ring-1 ring-black/10">
              <img 
                src={require('../assets/our-story.jpg')} 
                alt="Preparing fresh ingredients"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
            <div className="relative">
              <div className="bg-white/50 backdrop-blur-md rounded-[2rem] p-6 sm:bg-white/50 sm:backdrop-blur-lg md:bg-white/50 md:backdrop-blur-lg">
                <h2 className="text-4xl font-bold text-gray-900 mb-4 boba-font">
                  Our Story
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Founded in 2025, Too Lazy to Buy started as a simple idea: What if cooking was so easy, even the laziest person could do it? We pre-prep everything so you can enjoy fresh, delicious meals in minutes.
                </p>
                <p className="text-lg text-gray-700">
                  Whether you're too lazy to buy groceries or too lazy to prep the food, we've got you covered with our meal kits and readily available ingredients and recipes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="relative z-0 bg-[#FFF4D6] py-24 overflow-hidden" style={{ backgroundImage: `url(${require('../assets/pattern.png')})`, backgroundSize: '300px 300px', backgroundRepeat: 'repeat', backgroundPosition: 'center' }}>
        {/* Values images above band background */}
        <div className="pointer-events-none select-none absolute inset-0">
          <img
            src={require('../assets/Orange slices with straw.png')}
            alt="Orange slices"
            className="absolute left-[2vw] top-[-5vw] h-full w-auto scale-[1.3] hidden md:block"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/50 backdrop-blur-md rounded-[2rem] px-8 py-4 mb-8 sm:bg-white/50 sm:backdrop-blur-lg md:bg-white/50 md:backdrop-blur-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8 boba-font">
              Our Lazy Values
            </h2>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-10 mt-10">
  <div className="text-center flex-1 min-w-[200px] max-w-[300px]">
    <div className="flex justify-center mb-4">
      <Zap className="w-16 h-16 text-[#A8B456]" strokeWidth={1.5} />
    </div>
    <p className="text-2xl font-bold text-gray-900 boba-font">Quick & Easy</p>
    <p className="text-gray-600 mt-2">Meals ready in under 15 minutes.</p>
  </div>

  <div className="text-center flex-1 min-w-[200px] max-w-[300px]">
    <div className="flex justify-center mb-4">
      <Sparkles className="w-16 h-16 text-[#A8B456]" strokeWidth={1.5} />
    </div>
    <p className="text-2xl font-bold text-gray-900 boba-font">Fresh & Tasty</p>
    <p className="text-gray-600 mt-2">Quality ingredients, no compromises.</p>
  </div>

  <div className="text-center flex-1 min-w-[200px] max-w-[300px]">
    <div className="flex justify-center mb-4">
      <Users className="w-16 h-16 text-[#A8B456]" strokeWidth={1.5} />
    </div>
    <p className="text-2xl font-bold text-gray-900 boba-font">For Everyone</p>
    <p className="text-gray-600 mt-2">Options for all diets and preferences.</p>
  </div>
</div>

          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="relative z-0 bg-white py-24 overflow-hidden">
        {/* Team decorative big greens pushed to right */}
        {/* <img
          src={require('../assets/Green beans arrangement.png')}
          alt="Greens"
          className="pointer-events-none select-none absolute right-[4vw] top-0 h-full w-auto scale-[1.4] transition-opacity duration-700 ease-out opacity-0 sm:opacity-30 md:opacity-60 lg:opacity-100 hidden lg:block"
        /> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 boba-font">
            Meet the Lazy Team
          </h2>
          
          {/* Carousel Container */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`absolute -left-4 sm:-left-8 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 z-10 bg-[#FFB380] hover:bg-[#FF9F5C] text-white p-2 sm:p-3 rounded-full shadow-lg transition-all transform hover:scale-110 ${
                currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Previous team members"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Team Members Carousel */}
            <div className="overflow-hidden">
              <div className="max-w-7xl mx-auto px-4">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`
                  }}
                >
                  {teamMembers.map((member, index) => (
                    <div 
                      key={index} 
                      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-2 sm:px-3 md:px-4"
                    >
                      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                        <div className="h-64 overflow-hidden">
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6 text-center">
                          <h3 className="text-xl font-bold text-gray-900 mb-1 boba-font">
                            {member.name}
                          </h3>
                          <p className="text-gray-600">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className={`absolute -right-4 sm:-right-8 md:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 z-10 bg-[#FFB380] hover:bg-[#FF9F5C] text-white p-2 sm:p-3 rounded-full shadow-lg transition-all transform hover:scale-110 ${
                currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Next team members"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative z-0 bg-[#FFF4D6] py-28 overflow-hidden" style={{ backgroundImage: `url(${require('../assets/pattern.png')})`, backgroundSize: '300px 300px', backgroundRepeat: 'repeat', backgroundPosition: 'center' }}>
        {/* Final CTA decorative assets (swapped sides, scaled, no rotation) */}
        <img
          src={require('../assets/pexels-jj-jordan-44924743-9534911.png')}
          alt="Waffle with berries"
          className="pointer-events-none select-none absolute left-[5vw] bottom-[-1vw] h-full w-auto scale-[1.3] transition-opacity duration-700 ease-out opacity-0 sm:opacity-30 md:opacity-60 lg:opacity-100 hidden lg:block"
        />
        <img
          src={require('../assets/pexels-jj-jordan-44924743-7701712.png')}
          alt="Fruit splash"
          className="pointer-events-none select-none absolute right-[-1vw] bottom-[-4vw] h-full w-auto scale-[1.4] hidden md:block"
        />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="mx-auto inline-block bg-white/50 backdrop-blur-md rounded-[2rem] px-8 py-4 mb-8 sm:bg-white/50 sm:backdrop-blur-lg md:bg-white/50 md:backdrop-blur-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 boba-font">
              Join the Lazy Revolution
            </h2>
            <p className="text-xl text-gray-900">
              Ready to eat without the effort?
            </p>
          </div>
        </div>
        <a
          href="/contact"
          className="inline-block bg-[#FFB380] hover:bg-[#FF9F5C] text-white px-10 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg mt-4"
        >
          Contact Us
        </a>
      </div>
    

      <Footer />
    </div>
  );
};

export default About;
import React from 'react';
import { customerStats } from '../mockData';

const CustomerStats = () => {
  return (
    <div className="bg-[#F7F5F0] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {customerStats.map((stat, index) => (
          <div 
            key={index} 
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {index % 2 === 0 ? (
              <>
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src={stat.image} 
                    alt={stat.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute top-4 left-4 space-y-2">
                    {stat.badges.map((badge, i) => (
                      <div key={i} className="bg-[#91C11E] text-gray-900 text-sm font-bold px-4 py-2 rounded inline-block mr-2">
                        {badge}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                    {stat.title}
                  </h2>
                  <p className="text-lg text-gray-700">
                    {stat.description}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                    {stat.title}
                  </h2>
                  <p className="text-lg text-gray-700">
                    {stat.description}
                  </p>
                </div>
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src={stat.image} 
                    alt={stat.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute top-4 left-4 space-y-2">
                    {stat.badges.map((badge, i) => (
                      <div key={i} className="bg-[#91C11E] text-gray-900 text-sm font-bold px-4 py-2 rounded inline-block mr-2">
                        {badge}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerStats;

import React, { useState } from 'react';
import { Heart, MapPin, Camera } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const OurStory = () => {
  const { t } = useLanguage();
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const countries = [
    { code: 'FR', name: 'France', x: 23, y: 43, image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
   { code: 'IE', name: 'Ireland', x: 18, y: 38, image: 'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { code: 'UK', name: 'United Kingdom', x: 21, y: 38, image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { code: 'ES', name: 'Spain', x: 20, y: 50, image: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { code: 'DE', name: 'Germany', x: 27, y: 39, image: 'https://images.pexels.com/photos/3014019/pexels-photo-3014019.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { code: 'IT', name: 'Italy', x: 27, y: 45, image: 'https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { code: 'JP', name: 'Japan', x: 92, y: 45, image: 'https://images.pexels.com/photos/2901269/pexels-photo-2901269.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    
  ];

  return (
    <section id="story" className="py-20 bg-gradient-to-br from-rose-50 via-purple-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Notre Histoire
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comment tout a commencé
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-purple-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Interactive Map */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Nos Voyages Ensemble
          </h3>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Découvrez les pays que nous avons explorés main dans la main
          </p>
          
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="relative">
              {/* World Map Background */}
              <div className="relative w-full aspect-[3/2] max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl overflow-hidden">
                {/* Fixed background map */}
                <div
                  className="absolute inset-0 bg-no-repeat bg-center"
                  style={{
                    backgroundImage: 'url("/src/components/map.svg")',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                  }}
                >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-green-50/30"></div>
                </div>
                
                {/* Countries */}
                {countries.map((country) => (
                  <div
                    key={country.code}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
                    style={{ left: `${country.x}%`, top: `${country.y}%` }}
                    onMouseEnter={() => setHoveredCountry(country.code)}
                    onMouseLeave={() => setHoveredCountry(null)}
                  >
                    <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                      hoveredCountry === country.code 
                        ? 'bg-rose-500 scale-150 shadow-lg' 
                        : 'bg-purple-400 hover:bg-rose-400 hover:scale-125'
                    }`}>
                      <div className="absolute inset-0 rounded-full animate-ping bg-rose-400 opacity-20"></div>
                    </div>
                    
                    {/* Tooltip */}
                    {hoveredCountry === country.code && (
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block">
                        <div className="bg-white rounded-lg shadow-xl p-3 sm:p-4 min-w-32 sm:min-w-48 border border-gray-100">
                          <img
                            src={country.image}
                            alt={country.name}
                            className="w-full h-16 sm:h-24 object-cover rounded-lg mb-2 sm:mb-3"
                          />
                          <h4 className="font-bold text-gray-800 text-center text-sm sm:text-base">{country.name}</h4>
                          <div className="flex items-center justify-center mt-2">
                            <Camera className="w-4 h-4 text-purple-400 mr-1" />
                            <span className="text-sm text-gray-500">Souvenir</span>
                          </div>
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                      </div>
                    )}

                    {/* Mobile Image Display */}
                    {hoveredCountry === country.code && (
                      <div className="fixed inset-x-4 top-1/2 transform -translate-y-1/2 z-50 sm:hidden">
                        <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 max-w-sm mx-auto">
                          <img
                            src={country.image}
                            alt={country.name}
                            className="w-full h-32 object-cover rounded-xl mb-3"
                          />
                          <h4 className="font-bold text-gray-800 text-center text-lg mb-2">{country.name}</h4>
                          <div className="flex items-center justify-center">
                            <Camera className="w-4 h-4 text-purple-400 mr-2" />
                            <span className="text-sm text-gray-500">Souvenir de voyage</span>
                          </div>
                          <button
                            onClick={() => setHoveredCountry(null)}
                            className="absolute top-2 right-2 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors duration-200"
                          >
                            ×
                          </button>
                        </div>
                        <div 
                          className="fixed inset-0 bg-black/20 -z-10"
                          onClick={() => setHoveredCountry(null)}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
                
              </div>
              
              {/* Legend */}
              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-4">
                  <span className="hidden sm:inline">Survolez</span>
                  <span className="sm:hidden">Touchez</span>
                  {' '}les points pour découvrir nos voyages
                </p>
                <div className="inline-flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">Destinations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-rose-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">Survolé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
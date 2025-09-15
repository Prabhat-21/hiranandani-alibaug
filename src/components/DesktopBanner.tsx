import React, { useState, useEffect } from 'react';

const DesktopBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerImages = [
    {
      src: '/img/banner/banner1_desktop.jpg',
      alt: 'Hiranandani Sands - Luxury Residential Project'
    },
    {
      src: '/img/banner/banner2_desktop.jpg',
      alt: 'Hiranandani Sands - Premium Amenities'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div id="home" className="relative h-[calc(100vh-64px)]">
      {/* Banner Images */}
      <div className="relative w-full h-full">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {/* Left Content Card - Smaller and positioned higher */}
      <div className="absolute inset-0">
        <div className="container mx-auto px-6 h-full flex items-start pt-8">
          <div className="bg-white rounded-xl p-4 shadow-xl max-w-xs">
            <div className="text-center">
              <p className="text-blue-600 font-semibold text-xs mb-1">EOI Open</p>
              <h1 className="text-lg font-bold mb-1 text-gray-800">Hiranandani Sands</h1>
              <p className="text-xs text-gray-600 mb-0.5">At Nagaon, Alibaug</p>
              <p className="text-xs text-gray-600 mb-2">By Hiranandani Communities</p>

              {/* Benefits Box with Animations */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-dashed border-blue-300 rounded-lg p-2 mb-2 animate-glow-pulse">
                <div className="space-y-1">
                  <div className="flex items-center justify-center opacity-0 animate-slide-bounce" style={{ animationDelay: '0.2s' }}>
                    <span className="text-blue-600 font-semibold text-xs">🏗️ 250 Acres Township • 3 Towers</span>
                  </div>
                  <div className="flex items-center justify-center opacity-0 animate-slide-bounce" style={{ animationDelay: '0.4s' }}>
                    <span className="text-blue-600 font-semibold text-xs">🛥️ 1 Km Private Jetty</span>
                  </div>
                  <div className="flex items-center justify-center opacity-0 animate-slide-bounce" style={{ animationDelay: '0.6s' }}>
                    <span className="text-blue-600 font-semibold text-xs">🏛️ Greek Architecture</span>
                  </div>
                  <div className="flex items-center justify-center opacity-0 animate-slide-bounce" style={{ animationDelay: '0.8s' }}>
                    <span className="text-blue-600 font-semibold text-xs">🌿 100 Acres Wetland Garden</span>
                  </div>
                  <div className="flex items-center justify-center opacity-0 animate-slide-bounce" style={{ animationDelay: '1s' }}>
                    <span className="text-blue-600 font-semibold text-xs">🏖️ Close to Alibaug Beach</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 text-xs mb-1 opacity-0 animate-fade-up" style={{ animationDelay: '1.2s' }}>
                1, 2, 3 BHK & Studio Starting At
              </p>
              <div className="text-xl font-bold mb-2 text-gray-800 opacity-0 animate-fade-up" style={{ animationDelay: '1.4s' }}>
                <span className="text-blue-600">₹75 Lac*</span>
                <span className="text-sm ml-1">All Incl</span>
              </div>
              
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('showEngagementPopup', { detail: { type: 'costing' } }))}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg text-xs transition-all transform hover:scale-105 opacity-0 animate-fade-up"
                style={{ animationDelay: '1.6s' }}
              >
                Check EOI Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DesktopBanner;

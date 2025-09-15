import React from 'react';

const AmenityModal = ({ amenity, onClose }: { amenity: any; onClose: () => void }) => {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative max-w-4xl max-h-[90vh] rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2 shadow-lg hover:shadow-xl transition-all hover:bg-opacity-30"
        >
          <span className="text-white text-2xl font-bold">×</span>
        </button>
        <img
          src={amenity.image}
          alt={amenity.name}
          className="w-full h-auto max-h-[90vh] object-contain"
        />
      </div>
    </div>
  );
};

const Amenities = () => {
  const [selectedAmenity, setSelectedAmenity] = React.useState<any>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  // 2 sets of 4 images each - Updated for Hiranandani amenities
  const amenitySets = [
    [
      { image: '/img/amenities_images/gym.webp' },
      { image: '/img/amenities_images/kidsplayarea.webp' },
      { image: '/img/amenities_images/library.webp' },
      { image: '/img/amenities_images/yoga-meditation.webp' }
    ],
    [
      { image: '/img/amenities_images/jogging-track.webp' },
      { image: '/img/gallery_images/gallery_1.webp' },
      { image: '/img/gallery_images/gallery_2.webp' },
      { image: '/img/gallery_images/gallery_3.webp' }
    ]
  ];

  // Auto-rotate between sets
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % amenitySets.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleImageClick = (imageIndex: number) => {
    const currentImage = amenitySets[currentSlide][imageIndex];
    setSelectedAmenity(currentImage);
  };

  return (
    <section id="amenities" className="py-12 lg:py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl lg:text-5xl font-bold text-center text-black mb-8 lg:mb-8">Amenities</h1>
        
        {/* Clubhouse Highlight */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">90,000 Sq.ft Mega Clubhouse</h3>
            <p className="text-blue-100">World-class amenities in one of India's largest residential clubhouses</p>
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className="max-w-md mx-auto lg:max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4 mb-6 lg:mb-8">
            {amenitySets[currentSlide].map((item, imageIndex) => (
              <div 
                key={imageIndex} 
                className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => handleImageClick(imageIndex)}
              >
                <img
                  src={item.image}
                  alt={`Amenity ${imageIndex + 1}`}
                  className="w-full h-32 lg:h-40 object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Set indicators */}
          <div className="flex justify-center space-x-2 mb-6">
            {amenitySets.map((_, setIndex) => (
              <button
                key={setIndex}
                onClick={() => setCurrentSlide(setIndex)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  setIndex === currentSlide 
                    ? 'bg-blue-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('showEngagementPopup', { detail: { type: 'amenities' } }))}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 lg:py-3 lg:px-12 rounded-lg transition-colors text-lg lg:text-xl"
          >
            Request All Amenities
          </button>
        </div>
        
        {selectedAmenity && (
          <AmenityModal 
            amenity={selectedAmenity} 
            onClose={() => setSelectedAmenity(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Amenities;

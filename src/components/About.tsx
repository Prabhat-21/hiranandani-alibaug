import React from 'react';

const About = () => {
  return (
    <section id="overview" className="py-12 lg:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl lg:text-5xl font-bold text-black mb-8 lg:mb-8 text-center">Overview of the project</h1>
        
        {/* Scrollable content container */}
        <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg mb-6 lg:mb-6 text-center max-w-6xl mx-auto">
          <div className="max-h-64 lg:max-h-72 overflow-y-auto pr-4 lg:pr-0 text-gray-700 leading-relaxed lg:leading-loose text-base lg:text-lg">
            <p className="mb-6">
              Hiranandani Sands is the latest premium offering by Hiranandani Communities, located in the serene coastal town of Nagaon, Alibaug. Spread across 250 acres with 3 luxurious residential towers, this under-construction development offers a perfect blend of location, connectivity, and coastal lifestyle.
            </p>
            <p className="mb-6">
              Each home comes with iconic Greek architecture and elegant finishes, designed for families who value both space and comfort. With limited-period EOI offers starting from ₹3 Lacs and EOI window closing on 21st Sept, this is the ideal time to invest in Alibaug's most awaited landmark.
            </p>
            <p className="mb-6">
              The project features 100 Acres Wetland & Biodiversity Garden, 90,000 Sq.ft Mega Clubhouse, and 1 Km Private Jetty providing direct connectivity to South Mumbai in just 25 minutes.
            </p>
          </div>
        </div>
        
        {/* Download Brochure CTA */}
        <div className="text-center">
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('showEngagementPopup', { detail: { type: 'brochure' } }))}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 lg:py-3 lg:px-12 rounded-lg transition-colors text-lg lg:text-xl"
          >
            Download brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { Lock } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="sc-price" className="py-12 lg:py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-black mb-8 lg:mb-12">
          EOI Pricing
        </h2>
        
        <div className="max-w-md mx-auto lg:max-w-4xl">
          <div className="space-y-6 lg:space-y-8">
            {/* Studio Apartment Card */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
              <div className="text-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">Studio Apartment</h3>
                <p className="text-gray-600 text-lg lg:text-xl mb-6">Compact Living</p>
                
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('showEngagementPopup', { 
                    detail: { 
                      type: 'costing',
                      bhkType: 'studio' 
                    } 
                  }))}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 text-base lg:text-lg shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                >
                  <Lock className="w-5 h-5" />
                  <span>Unlock EOI pricing</span>
                </button>
              </div>
            </div>

            {/* 1 BHK Card */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
              <div className="text-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">1 BHK</h3>
                <p className="text-gray-600 text-lg lg:text-xl mb-6">Perfect for Couples</p>
                
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('showEngagementPopup', { 
                    detail: { 
                      type: 'costing',
                      bhkType: '1bhk' 
                    } 
                  }))}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 text-base lg:text-lg shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                >
                  <Lock className="w-5 h-5" />
                  <span>Unlock EOI pricing</span>
                </button>
              </div>
            </div>

            {/* 2 BHK Card */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
              <div className="text-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">2 BHK</h3>
                <p className="text-gray-600 text-lg lg:text-xl mb-6">Ideal for Small Families</p>
                
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('showEngagementPopup', { 
                    detail: { 
                      type: 'costing',
                      bhkType: '2bhk' 
                    } 
                  }))}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 text-base lg:text-lg shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                >
                  <Lock className="w-5 h-5" />
                  <span>Unlock EOI pricing</span>
                </button>
              </div>
            </div>

            {/* 3 BHK Card */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
              <div className="text-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">3 BHK</h3>
                <p className="text-gray-600 text-lg lg:text-xl mb-6">Spacious Family Homes</p>
                
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('showEngagementPopup', { 
                    detail: { 
                      type: 'costing',
                      bhkType: '3bhk' 
                    } 
                  }))}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 text-base lg:text-lg shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                >
                  <Lock className="w-5 h-5" />
                  <span>Unlock EOI pricing</span>
                </button>
              </div>
            </div>
          </div>

          {/* EOI Information Box */}
          <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-6 text-center">
            <h4 className="text-xl font-bold text-gray-800 mb-2">⏰ Limited Time EOI Offer</h4>
            <p className="text-gray-700 mb-3">EOI Starts from ₹3 Lacs • EOI Window Closes on 21st Sept</p>
            <p className="text-sm text-red-600 font-semibold">Last Chance To Avail Pre Launch Benefits</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

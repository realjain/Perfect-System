import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link from React Router


const CategoryCard = ({ id, img, title, description, brands = [] }) => {
  // Local state to handle the open/close state of the inquiry modal
  const [isOpen, setIsOpen] = useState(false);
  
  // Local state for form fields
  const [selectedBrand, setSelectedBrand] = useState('');
  const [modelNumber, setModelNumber] = useState('');

  const handleInquirySubmit = (e) => {
    e.preventDefault();

    if (!selectedBrand) {
      alert("Please select a brand.");
      return;
    }

    // 1. Get the raw number from your environment variables or fallback
    let rawNumber = import.meta.env.W_N;

    // 2. STAGE A CLEAN: Strip out characters (+, -, spaces) if they accidentally slipped into your .env file
    const cleanNumber = String(rawNumber).replace(/[+\s-]/g, "");

    // 3. Formulate the message text
    const message = `Hello, I would like to make an inquiry:\n\n` +
                    `*Category:* ${title} (${id.toUpperCase()})\n` +
                    `*Brand Required:* ${selectedBrand}\n` +
                    `*Model/Requirements:* ${modelNumber || 'Not specified'}`;

    const encodedMessage = encodeURIComponent(message);
    
    // 4. Construct the clean URL using wa.me (Do NOT include a slash before the query string)
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

    // Open the link cleanly in a new window
    window.open(whatsappUrl, '_blank');
    
    // Close the modal and reset state after submitting
    setIsOpen(false);
    setSelectedBrand('');
    setModelNumber('');
  };

  return (
    <>
      {/* 1. Main Product Card Component */}
      <div className="border border-gray-200 rounded-xl p-5 flex flex-col justify-between max-w-sm bg-white shadow-sm hover:shadow-md transition-shadow h-full">
        {/* Product Information Top Section */}
        <div>
          <img src={img} alt={title} className="w-full h-48 object-cover rounded-lg" />
          <h3 className="text-xl font-bold mt-3 text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm mt-2 line-clamp-3">{description}</p>
        </div>
        
        {/* Available Brands Badges */}
        <div className="mt-4 flex-grow">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">
            Available Brands:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {brands && brands.length > 0 ? (
              brands.map((brandName, idx) => (
                <span 
                  key={idx} 
                  className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-md border border-gray-200"
                >
                  {brandName}
                </span>
              ))
            ) : (
              <span className="text-xs text-gray-400 italic">No brands specified</span>
            )}
          </div>
        </div>
        
        {/* Action Buttons Container */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col gap-2">
          
          {/* NEW: View Details Button linking to dynamic details page */}
          <Link 
            to={`/ProductDetails/${id}`} // Adjust route structure path here if different in your App.js/main.js
            className="w-full text-center bg-gray-100 text-slate-800 hover:bg-gray-200 font-medium py-2.5 px-4 rounded transition-colors text-sm"
          >
            🔍 View Details
          </Link>

          {/* Action Button that Triggers the Modal */}
          <button 
            type="button"
            onClick={() => setIsOpen(true)}
            className="w-full bg-slate-900 text-white hover:bg-blue-600 font-medium py-2.5 px-4 rounded transition-colors flex items-center justify-center gap-2 shadow-sm text-sm"
          >
            <span className="text-base">💬</span> Inquire Now
          </button>
        </div>
      </div>

      {/* 2. Pop-up Overlay / Modal Section */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full overflow-hidden border border-gray-100 transform transition-all">
            
            {/* Modal Header */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-800">Quick Inquiry</h3>
                <p className="text-xs text-gray-500 mt-0.5">{title}</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl font-semibold focus:outline-none"
              >
                &times;
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleInquirySubmit} className="p-6 flex flex-col gap-4">
              {/* Brand Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Select Brand *</label>
                <select 
                  value={selectedBrand} 
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                  required
                >
                  <option value="">-- Choose Brand --</option>
                  {brands.map((brandName, idx) => (
                    <option key={idx} value={brandName}>{brandName}</option>
                  ))}
                </select>
              </div>

              {/* Model Input */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Model Name / Number (Optional)</label>
                <input 
                  type="text" 
                  placeholder="e.g. CP-UVR-0401E1, Exide 150AH"
                  value={modelNumber}
                  onChange={(e) => setModelNumber(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Actions Row */}
              <div className="mt-2 flex gap-3">
                <button 
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm shadow-sm"
                >
                  <span>💬</span> Send to WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryCard;
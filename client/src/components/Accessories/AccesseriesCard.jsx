import React, { useState } from 'react';

const AccesseriesCard = ({ img, title }) => {
  // Local state to handle the modal popup
  const [isOpen, setIsOpen] = useState(false);
  
  // Local state for the specific quantity input
  const [qty, setQty] = useState('');

  const handleInquirySubmit = (e) => {
    e.preventDefault();

    // 1. Get the raw number from your environment variables or fallback
    let rawNumber = import.meta.env.W_N || "9414157713";

    // 2. Strip out characters (+, -, spaces) to make it a clean number string
    const cleanNumber = String(rawNumber).replace(/[+\s-]/g, "");

    // 3. Formulate the message text
    const message = `Hello, I would like to make an inquiry:\n\n` +
                    `*Accessory:* ${title}\n` +
                    `*Quantity Required:* ${qty || 'Not specified'}`;

    const encodedMessage = encodeURIComponent(message);
    
    // 4. Construct the clean URL using wa.me
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

    // Open the link cleanly in a new window
    window.open(whatsappUrl, '_blank');
    
    // Reset state and close modal
    setIsOpen(false);
    setQty('');
  };

  return (
    <>
      {/* 1. Main Product Card Component */}
      <div className="w-full bg-white rounded-2xl border border-slate-100 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.08)] hover:border-slate-200 transition-all duration-300 p-3 flex flex-col h-full group">
        
        {/* Subtle Gray Background Image Box */}
        <div className="w-full aspect-square rounded-xl bg-slate-50/80 overflow-hidden mb-3 relative border border-slate-100/50">
          {img && img.trim() !== "" ? (
            <img 
              src={img} 
              alt={title} 
              className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105" 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs font-medium">
              No Image
            </div>
          )}
        </div>

        {/* Typography & Hierarchy */}
        <div className="flex flex-col flex-1 px-1 min-h-[44px] justify-start">
          <h3 className="text-sm font-semibold text-slate-800 tracking-tight line-clamp-2 group-hover:text-blue-600 transition-colors duration-200 leading-snug">
            {title}
          </h3>
        </div>

        {/* Action Button that Triggers the Modal */}
        <div className="mt-3">
          <button 
            type="button"
            onClick={() => setIsOpen(true)}
            className="w-full py-2 px-4 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-blue-600 transition-all duration-200 cursor-pointer text-center tracking-wide shadow-sm" 
          >
            Inquiry
          </button>
        </div>
      </div>

      {/* 2. Professional Glassmorphism / Pure Blur Modal Section */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md transition-all">
          {/* Box styled with deep shadow and thin border to cleanly pop out against the blurred page context */}
          <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full overflow-hidden border border-slate-200/60 transform scale-100 transition-transform">
            
            {/* Modal Header */}
            <div className="bg-slate-50 px-5 py-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-800">Quick Inquiry</h3>
                <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{title}</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-xl font-semibold focus:outline-none"
              >
                &times;
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleInquirySubmit} className="p-5 flex flex-col gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                  Quantity (Optional)
                </label>
                <input 
                  type="text"
                  placeholder="e.g. 2 pcs, 10 units..."
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-400"
                />
              </div>

              {/* Actions Row */}
              <div className="flex gap-2.5">
                <button 
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2 px-4 rounded-lg transition-colors text-xs"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-1.5 text-xs shadow-sm"
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

export default AccesseriesCard;
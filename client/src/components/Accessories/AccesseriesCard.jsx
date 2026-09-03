import React, { useState, useEffect, useRef } from 'react';
import { ZoomIn, ZoomOut, X, Maximize2 } from 'lucide-react';

const AccesseriesCard = ({ img, title }) => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [qty, setQty] = useState('');

  const imageContainerRef = useRef(null);

  // Lock body scroll and listen for ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsPreviewOpen(false);
        setIsInquiryOpen(false);
      }
    };

    if (isPreviewOpen || isInquiryOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isPreviewOpen, isInquiryOpen]);

  // E-commerce interactive cursor pan logic
  const handleMouseMove = (e) => {
    if (!imageContainerRef.current) return;
    const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y))
    });
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();

    let rawNumber = import.meta.env.VITE_W_N;
    const cleanNumber = String(rawNumber || '').replace(/[+\s-]/g, "");

    const message = `Hello, I would like to make an inquiry:\n\n` +
                    `*Accessory:* ${title}\n` +
                    `*Quantity Required:* ${qty || 'Not specified'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    
    setIsInquiryOpen(false);
    setQty('');
  };

  return (
    <>
      {/* 1. Main Accessory Card */}
      <div className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-400/40 hover:-translate-y-1 transition-all duration-300 p-3.5 flex flex-col justify-between h-full group">
        
        <div>
          {/* Card Media Box: Premium object-cover frame with hover zoom indicator */}
          <div 
            onClick={() => {
              if (img && img.trim() !== "") {
                setIsZoomed(false);
                setIsPreviewOpen(true);
              }
            }}
            className={`w-full aspect-square rounded-xl bg-slate-50 overflow-hidden mb-3 relative border border-slate-100 ${
              img && img.trim() !== "" ? "cursor-zoom-in" : ""
            }`}
          >
            {img && img.trim() !== "" ? (
              <>
                <img 
                  src={img} 
                  alt={title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                
                {/* Floating Preview Badge */}
                <div className="absolute inset-0 bg-slate-950/15 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                  <span className="p-2 rounded-full bg-white/95 backdrop-blur-sm text-slate-800 shadow-md transform scale-90 group-hover:scale-100 transition-transform duration-200 flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                    <Maximize2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>View</span>
                  </span>
                </div>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs font-medium">
                No Image
              </div>
            )}
          </div>

          {/* Typography */}
          <div className="px-1 min-h-[40px] flex items-start">
            <h3 className="text-xs sm:text-sm font-semibold text-slate-900 tracking-tight line-clamp-2 group-hover:text-blue-600 transition-colors duration-200 leading-snug">
              {title}
            </h3>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-3.5">
          <button 
            type="button"
            onClick={() => setIsInquiryOpen(true)}
            className="w-full py-2 px-4 text-xs font-bold uppercase tracking-wider rounded-xl bg-slate-950 text-white hover:bg-blue-600 transition-all duration-200 cursor-pointer text-center shadow-xs active:scale-[0.98]" 
          >
            Inquire Now
          </button>
        </div>
      </div>

      {/* 2. Amazon/Blinkit-Style Image Lightbox & Magnifier Modal */}
      {isPreviewOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/90">
              <div className="pr-4 min-w-0">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">Product Preview</span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                  {title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {/* Zoom Toggle Button */}
                <button
                  type="button"
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-all shadow-2xs cursor-pointer"
                >
                  {isZoomed ? (
                    <>
                      <ZoomOut className="w-3.5 h-3.5 text-blue-600" />
                      <span>Reset</span>
                    </>
                  ) : (
                    <>
                      <ZoomIn className="w-3.5 h-3.5 text-blue-600" />
                      <span>2x Zoom</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setIsPreviewOpen(false)}
                  className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
                  aria-label="Close preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Interactive Image Stage */}
            <div 
              ref={imageContainerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              className={`w-full h-[55vh] sm:h-[65vh] bg-slate-100/50 flex items-center justify-center overflow-hidden relative select-none ${
                isZoomed ? "cursor-crosshair" : "cursor-zoom-in"
              }`}
            >
              <img
                src={img}
                alt={title}
                style={{
                  transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                  transform: isZoomed ? 'scale(2.2)' : 'scale(1)',
                }}
                className="w-full h-full object-contain transition-transform duration-100 ease-out pointer-events-none"
              />

              {/* Pan Hint Overlay */}
              {!isZoomed && (
                <div className="absolute bottom-4 bg-slate-950/70 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-full text-xs font-medium pointer-events-none shadow-sm">
                  Hover or click to magnify details
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Move mouse to explore high-res hardware components</span>
              <button
                type="button"
                onClick={() => {
                  setIsPreviewOpen(false);
                  setIsInquiryOpen(true);
                }}
                className="text-blue-600 font-bold hover:underline cursor-pointer"
              >
                Inquire About This Item →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Inquiry Modal */}
      {isInquiryOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-md transition-all"
          onClick={() => setIsInquiryOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden border border-slate-100 transform scale-100 transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-slate-50/80 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900">Quick Inquiry</h3>
                <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{title}</p>
              </div>
              <button 
                type="button"
                onClick={() => setIsInquiryOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-xl font-semibold focus:outline-none cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleInquirySubmit} className="p-6 flex flex-col gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Quantity (Optional)
                </label>
                <input 
                  type="text"
                  placeholder="e.g. 2 pcs, 10 units..."
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>

              {/* Actions */}
              <div className="flex gap-2.5 pt-1">
                <button 
                  type="button" 
                  onClick={() => setIsInquiryOpen(false)}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 px-4 rounded-xl transition-colors text-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 text-xs shadow-sm shadow-emerald-600/20 active:scale-[0.98] cursor-pointer"
                >
                  <span>💬</span> WhatsApp
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
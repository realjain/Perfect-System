// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const CategoryCard = ({ id, img, title, description, brands = [] }) => {
//   const navigate = useNavigate();

//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedBrand, setSelectedBrand] = useState('');
//   const [modelNumber, setModelNumber] = useState('');

//   const handleCardClick = () => {
//     navigate(`/ProductDetails/${id}`);
//   };

//   const handleInquirySubmit = (e) => {
//     e.preventDefault();

//     if (!selectedBrand) {
//       alert("Please select a brand.");
//       return;
//     }

//     let rawNumber = import.meta.env.VITE_W_N;
//     const cleanNumber = String(rawNumber).replace(/[+\s-]/g, "");

//     const message = `Hello, I would like to make an inquiry:\n\n` +
//                     `*Category:* ${title} (${id.toUpperCase()})\n` +
//                     `*Brand Required:* ${selectedBrand}\n` +
//                     `*Model/Requirements:* ${modelNumber || 'Not specified'}`;

//     const encodedMessage = encodeURIComponent(message);
//     const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

//     window.open(whatsappUrl, '_blank');
    
//     setIsOpen(false);
//     setSelectedBrand('');
//     setModelNumber('');
//   };

//   return (
//     <>
//       {/* Main Card with smooth hover lift and glow */}
//       <div 
//         onClick={handleCardClick}
//         className="group relative border border-slate-200/80 rounded-2xl flex flex-col justify-between max-w-sm bg-white shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-400/50 hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer h-full overflow-hidden"
//       >
//         {/* Top Product Information Section */}
//         <div>
//           {/* Big, Edge-to-Edge Image Container with Smooth Scale Effect */}
//           <div className="w-full h-56 sm:h-60 bg-slate-100 overflow-hidden relative">
//             <img 
//               src={img} 
//               alt={title} 
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
//             />
//             <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
//           </div>

//           {/* Text Content */}
//           <div className="px-5 pt-4">
//             <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 leading-snug">
//               {title}
//             </h3>
            
//             <p className="text-slate-500 text-sm mt-2 line-clamp-3 leading-relaxed">
//               {description}
//             </p>
//           </div>
//         </div>
        
//         {/* Available Brands Badges */}
//         <div className="px-5 mt-4 flex-grow">
//           <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
//             Available Brands
//           </span>
//           <div className="flex flex-wrap gap-1.5">
//             {brands && brands.length > 0 ? (
//               brands.map((brandName, idx) => (
//                 <span 
//                   key={idx} 
//                   className="bg-slate-50 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-lg border border-slate-200/60 hover:bg-slate-100 hover:border-slate-300 transition-colors duration-150"
//                 >
//                   {brandName}
//                 </span>
//               ))
//             ) : (
//               <span className="text-xs text-slate-400 italic">No brands specified</span>
//             )}
//           </div>
//         </div>
        
//         {/* Action Buttons Container */}
//         <div 
//           className="p-5 pt-4 border-t border-slate-100 flex flex-col gap-2.5 mt-5"
//           onClick={(e) => e.stopPropagation()} 
//         >
//           {/* View Details Button */}
//           <Link 
//             to={`/ProductDetails/${id}`}
//             className="w-full text-center bg-slate-100/90 hover:bg-slate-200/90 text-slate-800 font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 text-xs uppercase tracking-wider active:scale-[0.98]"
//           >
//             🔍 View Details
//           </Link>

//           {/* WhatsApp / Inquiry Button */}
//           <button 
//             type="button"
//             onClick={(e) => {
//               e.stopPropagation();
//               setIsOpen(true);
//             }}
//             className="w-full bg-slate-950 hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:shadow-blue-500/20 active:scale-[0.98] text-xs uppercase tracking-wider"
//           >
//             <span>💬</span> Inquire Now
//           </button>
//         </div>
//       </div>

//       {/* Pop-up Overlay / Modal */}
//       {isOpen && (
//         <div 
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-200"
//           onClick={() => setIsOpen(false)}
//         >
//           <div 
//             className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-100 transform transition-all duration-200 scale-100"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Modal Header */}
//             <div className="bg-slate-50/80 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
//               <div>
//                 <h3 className="text-base font-bold text-slate-900">Quick Inquiry</h3>
//                 <p className="text-xs text-slate-500 mt-0.5">{title}</p>
//               </div>
//               <button 
//                 type="button"
//                 onClick={() => setIsOpen(false)}
//                 className="text-slate-400 hover:text-slate-700 text-2xl font-semibold transition-colors focus:outline-none"
//               >
//                 &times;
//               </button>
//             </div>

//             {/* Modal Form */}
//             <form onSubmit={handleInquirySubmit} className="p-6 flex flex-col gap-4">
//               <div>
//                 <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
//                   Select Brand *
//                 </label>
//                 <select 
//                   value={selectedBrand} 
//                   onChange={(e) => setSelectedBrand(e.target.value)}
//                   className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white transition-all duration-150"
//                   required
//                 >
//                   <option value="">-- Choose Brand --</option>
//                   {brands.map((brandName, idx) => (
//                     <option key={idx} value={brandName}>{brandName}</option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
//                   Model Name / Number (Optional)
//                 </label>
//                 <input 
//                   type="text" 
//                   placeholder="e.g. CP-UVR-0401E1, Exide 150AH"
//                   value={modelNumber}
//                   onChange={(e) => setModelNumber(e.target.value)}
//                   className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-150 placeholder:text-slate-400"
//                 />
//               </div>

//               <div className="mt-2 flex gap-3">
//                 <button 
//                   type="button"
//                   onClick={() => setIsOpen(false)}
//                   className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 px-4 rounded-xl transition-colors duration-150 text-xs uppercase tracking-wider"
//                 >
//                   Cancel
//                 </button>
//                 <button 
//                   type="submit"
//                   className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-150 flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-sm hover:shadow-emerald-600/20 active:scale-[0.98]"
//                 >
//                   <span>💬</span> WhatsApp
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default CategoryCard;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CategoryCard = ({ 
  id, 
  img, 
  cardImageHome, 
  cardImageCatalog, 
  title, 
  description, 
  brands = [], 
  isHomePage = false 
}) => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [modelNumber, setModelNumber] = useState('');
  const [imgError, setImgError] = useState(false);

  // Automatically select the proper image based on where the card is rendered
  const activeImage = isHomePage 
    ? (cardImageHome || img) 
    : (cardImageCatalog || img);

  const handleCardClick = () => {
    navigate(`/productDetails/${id}`);
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();

    if (brands && brands.length > 0 && !selectedBrand) {
      alert("Please select a brand.");
      return;
    }

    let rawNumber = import.meta.env.VITE_W_N;
    const cleanNumber = String(rawNumber || '').replace(/[+\s-]/g, "");

    const message = `Hello, I would like to make an inquiry:\n\n` +
                    `*Category:* ${title} (${id ? id.toUpperCase() : ''})\n` +
                    `*Brand Required:* ${selectedBrand || 'Any'}\n` +
                    `*Model/Requirements:* ${modelNumber || 'Not specified'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    
    setIsOpen(false);
    setSelectedBrand('');
    setModelNumber('');
  };

  return (
    <>
      {/* Main Card with smooth hover lift and glow */}
      <div 
        onClick={handleCardClick}
        className="group relative border border-slate-200/80 rounded-2xl flex flex-col justify-between max-w-sm bg-white shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-400/50 hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer h-full overflow-hidden"
      >
        {/* Top Product Information Section */}
        <div>
          {/* Big, Edge-to-Edge Image Container with Smooth Scale Effect */}
          <div className="w-full h-56 sm:h-60 bg-slate-100 overflow-hidden relative">
            {!imgError && activeImage ? (
              <img 
                src={activeImage} 
                alt={title} 
                onError={() => setImgError(true)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400 text-xs font-semibold uppercase">
                {title}
              </div>
            )}
            <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
          </div>

          {/* Text Content */}
          <div className="px-5 pt-4">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 leading-snug">
              {title}
            </h3>
            
            <p className="text-slate-500 text-sm mt-2 line-clamp-3 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        
        {/* Available Brands Badges */}
        <div className="px-5 mt-4 flex-grow">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
            Available Brands
          </span>
          <div className="flex flex-wrap gap-1.5">
            {brands && brands.length > 0 ? (
              brands.map((brandName, idx) => (
                <span 
                  key={idx} 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedBrand(brandName);
                    setIsOpen(true);
                  }}
                  className="bg-slate-50 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-lg border border-slate-200/60 hover:bg-slate-100 hover:border-slate-300 transition-colors duration-150"
                >
                  {brandName}
                </span>
              ))
            ) : (
              <span className="text-xs text-slate-400 italic">No brands specified</span>
            )}
          </div>
        </div>
        
        {/* Action Buttons Container */}
        <div 
          className="p-5 pt-4 border-t border-slate-100 flex flex-col gap-2.5 mt-5"
          onClick={(e) => e.stopPropagation()} 
        >
          {/* View Details Button */}
          <Link 
            to={`/productDetails/${id}`}
            className="w-full text-center bg-slate-100/90 hover:bg-slate-200/90 text-slate-800 font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 text-xs uppercase tracking-wider active:scale-[0.98]"
          >
            🔍 View Details
          </Link>

          {/* WhatsApp / Inquiry Button */}
          <button 
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(true);
            }}
            className="w-full bg-slate-950 hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:shadow-blue-500/20 active:scale-[0.98] text-xs uppercase tracking-wider"
          >
            <span>💬</span> Inquire Now
          </button>
        </div>
      </div>

      {/* Pop-up Overlay / Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-100 transform transition-all duration-200 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-slate-50/80 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">Quick Inquiry</h3>
                <p className="text-xs text-slate-500 mt-0.5">{title}</p>
              </div>
              <button 
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-700 text-2xl font-semibold transition-colors focus:outline-none"
              >
                &times;
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleInquirySubmit} className="p-6 flex flex-col gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Select Brand *
                </label>
                <select 
                  value={selectedBrand} 
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white transition-all duration-150"
                  required
                >
                  <option value="">-- Choose Brand --</option>
                  {brands.map((brandName, idx) => (
                    <option key={idx} value={brandName}>{brandName}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Model Name / Number (Optional)
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. CP-UVR-0401E1, Exide 150AH"
                  value={modelNumber}
                  onChange={(e) => setModelNumber(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-150 placeholder:text-slate-400"
                />
              </div>

              <div className="mt-2 flex gap-3">
                <button 
                  type="button" 
                  onClick={() => setIsOpen(false)}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 px-4 rounded-xl transition-colors duration-150 text-xs uppercase tracking-wider"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-150 flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-sm hover:shadow-emerald-600/20 active:scale-[0.98]"
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

export default CategoryCard;
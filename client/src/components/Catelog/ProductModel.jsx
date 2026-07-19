import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone } from 'lucide-react'; // Added Phone icon import
import { catalogData } from './ProductModelData';

const ProductModel = () => {
  const { category } = useParams();
  
  // Guard against undefined category or missing catalog entry safely
  const product = catalogData && category ? catalogData[category] : null;

  // Local state to handle the open/close state of the inquiry modal
  const [isOpen, setIsOpen] = useState(false);
  
  // Local state for form fields
  const [selectedBrand, setSelectedBrand] = useState('');
  const [modelNumber, setModelNumber] = useState('');

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50 text-slate-600 font-medium pt-24">
        <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-slate-100 max-w-md mx-4">
          <p className="text-lg font-semibold text-slate-800">Product Category Not Found</p>
          <p className="text-sm text-slate-500 mt-2">The requested category "{category}" does not exist in our catalog.</p>
          <Link to="/ProductCatelog" className="inline-block mt-5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
            Back to Catalog
          </Link>
        </div>
      </div>
    );
  }

  // Handle WhatsApp inquiry submission
  const handleInquirySubmit = (e) => {
    e.preventDefault();

    if (product.brands && product.brands.length > 0 && !selectedBrand) {
      alert("Please select a brand.");
      return;
    }

    let rawNumber = import.meta.env.VITE_W_N ;
    const cleanNumber = String(rawNumber).replace(/[+\s-]/g, "");

    const message = `Hello, I would like to make an inquiry:\n\n` +
                    `*Category:* ${product.title || 'Product'}\n` +
                    `*Brand Required:* ${selectedBrand || 'Any Brand'}\n` +
                    `*Model/Requirements:* ${modelNumber || 'Not specified'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    
    // Close modal and clean up inputs
    setIsOpen(false);
    setSelectedBrand('');
    setModelNumber('');
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white pt-24">
      
      {/* BREADCRUMB NAVIGATION */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center space-x-2 text-xs md:text-sm font-semibold text-slate-500 py-4 border-b border-slate-100">
          <Link to="/" className="hover:text-blue-600 transition-colors duration-200">
            Home
          </Link>
          <span className="text-slate-300 pointer-events-none text-[10px] md:text-xs">&#9656;</span>
          
          <Link to="/ProductCatelog" className="hover:text-blue-600 transition-colors duration-200">
            Product Catalog
          </Link>
          <span className="text-slate-300 pointer-events-none text-[10px] md:text-xs">&#9656;</span>

          <span className="text-slate-950 font-black capitalize tracking-tight bg-slate-50 px-3 py-1 border border-slate-200/60 rounded-full shadow-sm">
            {product.title || "Product Details"}
          </span>
        </nav>
      </div>

      {/* HEADER HERO AREA */}
      <header className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600">
              Premium Solutions
            </span>
            <span className="inline-flex items-center rounded-full border border-slate-200/60 bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600 shadow-inner">
              Verified Architecture
            </span>
          </div>

          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl uppercase">
            {product.title || "Product details"}
          </h1>
        </div>
      </header>

      {/* TWO COLUMN GRID MAIN VIEW */}
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start">
          
          {/* LEFT 2-COLUMNS: IMAGE BANNER, TEXT OVERVIEW, SPECS */}
          <div className="space-y-8 lg:col-span-2">
            {/* Banner Media Frame - Only render if a valid string is provided */}
            {product.bannerImage && typeof product.bannerImage === 'string' && product.bannerImage.trim() !== "" ? (
              <div className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 shadow-sm aspect-[16/9]">
                <img
                  src={product.bannerImage}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            ) : null}

            {/* Product Overview Section */}
            <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="mb-4 flex items-center gap-2.5 text-base font-black text-slate-950 uppercase tracking-tight">
                <span className="h-4 w-1 rounded-full bg-blue-600" />
                Product Overview
              </h2>
              <p className="whitespace-pre-line text-sm leading-relaxed text-slate-500 font-medium">
                {product.description || "Professional product options customized to suit your requirements. Contact us for direct setup, layouts, and assistance."}
              </p>
            </section>

            {/* Features Array Section */}
            {Array.isArray(product.features) && product.features.length > 0 && (
              <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="mb-5 flex items-center gap-2.5 text-base font-black text-slate-950 uppercase tracking-tight">
                  <span className="h-4 w-1 rounded-full bg-blue-600" />
                  Key Features & Capabilities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center gap-3 rounded-full border border-slate-200/60 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-700 shadow-inner"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 text-[10px] border border-blue-100/50">
                        ✓
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* System Configurations Section */}
            {product.variants && (
              <section className="rounded-3xl border border-slate-200/60 bg-slate-50 p-6 shadow-inner sm:p-8">
                <h3 className="mb-4 text-xs font-black uppercase tracking-wider text-slate-400">
                  {product.variantsTitle || "Available System Configurations"}
                </h3>
                {Array.isArray(product.variants) ? (
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant, index) => (
                      <div
                        key={index}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200/40 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                        {variant}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="inline-flex rounded-full border border-slate-200/40 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                    {String(product.variants)}
                  </div>
                )}
              </section>
            )}

            {/* Ecosystem Brands Section */}
            {product.brands && (
              <section className="rounded-3xl border border-slate-200/60 bg-slate-50 p-6 shadow-inner sm:p-8">
                <h4 className="mb-4 text-xs font-black uppercase tracking-wider text-slate-400">
                  {product.partnersTitle || "Compatible Brands"}
                </h4>
                {Array.isArray(product.brands) && product.brands.length > 0 ? (
                  <div className="flex flex-wrap items-center gap-3">
                    {product.brands.map((brand, index) => (
                      <React.Fragment key={index}>
                        <span className="text-sm font-bold text-slate-800 tracking-tight hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                          {brand}
                        </span>
                        {index < product.brands.length - 1 && (
                          <span className="text-slate-300 font-light select-none">|</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                ) : (
                  <div className="text-sm font-semibold text-slate-500 italic">
                    {typeof product.brands === 'string' && product.brands.trim() !== "" ? product.brands : "Multiple premium brands supported"}
                  </div>
                )}
              </section>
            )}
          </div>

          {/* RIGHT 1-COLUMN: STICKY FLOATING QUICK INQUIRY SIDEBAR */}
          <div className="space-y-6 lg:col-span-1 lg:sticky lg:top-28">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-md flex flex-col items-center text-center gap-4">
              <div className="flex flex-col items-center text-center w-full">
                <span className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-3 py-1 border border-blue-100/50 rounded-full tracking-wider mb-4">
                  Procurement Portal
                </span>
                <h3 className="text-lg font-black text-slate-950 tracking-tight mb-2">Need Custom Sizing?</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-2 px-2">
                  Get custom specifications, multi-device enterprise packages, deployment layout support, and commercial quotes tailored for your facility.
                </p>
              </div>
              
              {/* Action Buttons Stack */}
              <div className="w-full flex flex-col gap-3">
                <button 
                  onClick={() => setIsOpen(true)}
                  className="w-full py-3 font-semibold rounded-full bg-slate-950 text-white shadow-md hover:bg-slate-800 transition-all duration-200 text-sm tracking-wide"
                >
                  Enquiry Now
                </button>

                <a
                  href="tel:+919414165021"
                  className="w-full flex items-center justify-center gap-2 border border-slate-200 hover:border-emerald-500/40 hover:bg-emerald-50/30 transition-all duration-300 py-3 rounded-full bg-white shadow-sm text-slate-700 font-semibold text-sm tracking-wide"
                >
                  <Phone size={16} className="text-amber-500" />
                  Call Us
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* MODAL OVERLAY IN DETAIL CONTEXT */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full overflow-hidden border border-gray-100 transform transition-all">
            
            {/* Modal Header */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-800">Quick Inquiry</h3>
                <p className="text-xs text-gray-500 mt-0.5">{product.title}</p>
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
              
              {/* Brand Dropdown (Only show if there are brands) */}
              {Array.isArray(product.brands) && product.brands.length > 0 ? (
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Select Brand *</label>
                  <select 
                    value={selectedBrand} 
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                    required
                  >
                    <option value="">-- Choose Brand --</option>
                    {product.brands.map((brandName, idx) => (
                      <option key={idx} value={brandName}>{brandName}</option>
                    ))}
                  </select>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Preferred Brand (Optional)</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Any compatible brand"
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              )}

              {/* Model Input */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Model Name / Number (Optional)</label>
                <input 
                  type="text" 
                  placeholder="e.g. Specific requirements..."
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
    </div>
  );
};

export default ProductModel;

// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { 
//   Phone, 
//   ArrowRight, 
//   ChevronRight, 
//   CheckCircle2, 
//   ShieldCheck, 
//   Sparkles, 
//   Layers, 
//   Building2, 
//   Send, 
//   X,
//   Wrench,
//   Clock,
//   FileText,
//   SlidersHorizontal
// } from 'lucide-react';
// import { catalogData } from './ProductModelData';

// const ProductModel = () => {
//   const { category } = useParams();
  
//   // Guard against undefined category or missing catalog entry safely
//   const product = catalogData && category ? catalogData[category] : null;

//   // Local states
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'features' | 'brands' | 'service'
//   const [selectedBrand, setSelectedBrand] = useState('');
//   const [selectedVariant, setSelectedVariant] = useState('');
//   const [modelNumber, setModelNumber] = useState('');

//   if (!product) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-slate-50/70 px-4 pt-24 pb-12 text-slate-700 antialiased">
//         <div className="w-full max-w-md rounded-3xl border border-slate-200/90 bg-white p-8 text-center shadow-xl shadow-slate-900/5">
//           <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-inner">
//             <Layers className="h-7 w-7" />
//           </div>
//           <h2 className="mt-5 text-xl font-bold text-slate-950">Category Not Found</h2>
//           <p className="mt-2 text-sm leading-relaxed text-slate-500">
//             The product category "{category}" is not available in our catalog.
//           </p>
//           <Link 
//             to="/ProductCatelog" 
//             className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-blue-700 active:scale-[0.98]"
//           >
//             <span>Back to Products</span>
//             <ArrowRight className="h-4 w-4" />
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   // Handle WhatsApp inquiry submission
//   const handleInquirySubmit = (e) => {
//     e.preventDefault();

//     if (product.brands && product.brands.length > 0 && !selectedBrand) {
//       alert("Please select a brand.");
//       return;
//     }

//     let rawNumber = import.meta.env.VITE_W_N;
//     const cleanNumber = String(rawNumber).replace(/[+\s-]/g, "");

//     const message = `*PRODUCT INQUIRY*\n` +
//                     `--------------------------------------\n` +
//                     `*Category:* ${product.title || 'Product'}\n` +
//                     `*Selected Type / Variant:* ${selectedVariant || 'Standard / Any'}\n` +
//                     `*Brand Required:* ${selectedBrand || 'Any Brand'}\n` +
//                     `*Requirements / Notes:* ${modelNumber || 'Need advice and price details'}\n` +
//                     `--------------------------------------\n` +
//                     `Please share the best price quote and installation details.`;

//     const encodedMessage = encodeURIComponent(message);
//     const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

//     window.open(whatsappUrl, '_blank');
    
//     // Close modal & reset fields
//     setIsOpen(false);
//     setSelectedBrand('');
//     setSelectedVariant('');
//     setModelNumber('');
//   };

//   const tabs = [
//     { id: 'overview', label: 'Product Details', icon: FileText },
//     { id: 'features', label: 'Key Features', icon: CheckCircle2 },
//     { id: 'brands', label: 'Available Brands', icon: Building2 },
//     { id: 'service', label: 'Service & Warranty', icon: ShieldCheck }
//   ];

//   return (
//     <div className="min-h-screen overflow-x-hidden bg-[#fafcff] pt-20 pb-20 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
      
//       {/* ================= BREADCRUMB NAVIGATION ================= */}
//       <div className="border-b border-slate-200/70 bg-white/80 backdrop-blur-md sticky top-0 z-30">
//         <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
//           <nav className="flex items-center space-x-1.5 text-xs font-semibold text-slate-500">
//             <Link to="/" className="transition-colors hover:text-blue-600">Home</Link>
//             <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
//             <Link to="/ProductCatelog" className="transition-colors hover:text-blue-600">Products</Link>
//             <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
//             <span className="font-bold text-slate-950 truncate max-w-[200px] sm:max-w-none">{product.title}</span>
//           </nav>

//           <div className="hidden items-center gap-3 sm:flex">
//             <div className="flex items-center gap-1.5 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-3 py-1 text-[11px] font-bold text-emerald-800">
//               <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
//               In Stock &amp; Ready for Installation
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ================= HERO HEADER ================= */}
//       <header className="relative border-b border-slate-200/70 bg-white py-10 sm:py-12">
//         <div 
//           className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_70%,transparent_100%)]" 
//           aria-hidden="true" 
//         />
        
//         <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-wrap items-center gap-2">
//             <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-bold tracking-wider text-blue-800 shadow-2xs">
//               <Sparkles className="h-3.5 w-3.5 text-blue-600" />
//               Top Quality Products
//             </span>
//             <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
//               <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
//               100% Original Guarantee
//             </span>
//           </div>

//           <div className="mt-5 grid grid-cols-1 items-end justify-between gap-6 lg:grid-cols-12">
//             <div className="lg:col-span-8">
//               <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
//                 {product.title || "Product Details"}
//               </h1>
//               <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
//                 Complete solutions including genuine products, expert installation, and reliable after-sales service for homes, offices, and businesses.
//               </p>
//             </div>

//             {/* Quick Benefits Strip */}
//             <div className="flex flex-wrap gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 shadow-2xs backdrop-blur-xs lg:col-span-4 lg:justify-end">
//               <div>
//                 <div className="text-lg font-black text-slate-900">24/7</div>
//                 <div className="text-[11px] font-semibold text-slate-500 uppercase">Service Support</div>
//               </div>
//               <div className="h-8 w-px bg-slate-200" />
//               <div>
//                 <div className="text-lg font-black text-emerald-600">100%</div>
//                 <div className="text-[11px] font-semibold text-slate-500 uppercase">Original Items</div>
//               </div>
//               <div className="h-8 w-px bg-slate-200" />
//               <div>
//                 <div className="text-lg font-black text-blue-600">30+ Yrs</div>
//                 <div className="text-[11px] font-semibold text-slate-500 uppercase">Experience</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* ================= MAIN CONTENT ================= */}
//       <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start xl:gap-12">
          
//           {/* LEFT 8-COLUMNS */}
//           <div className="space-y-8 lg:col-span-8">
            
//             {/* Banner Image Container */}
//             {product.bannerImage && typeof product.bannerImage === 'string' && product.bannerImage.trim() !== "" && (
//               <div className="group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-2.5 shadow-xl shadow-slate-900/5">
//                 <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-900">
//                   <img
//                     src={product.bannerImage}
//                     alt={product.title}
//                     className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
//                   <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white sm:bottom-6 sm:left-6 sm:right-6">
//                     <div>
//                       <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Perfect System</span>
//                       <h4 className="text-base font-bold sm:text-xl">{product.title}</h4>
//                     </div>
//                     <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md">
//                       <ShieldCheck className="h-5 w-5 text-emerald-300" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Section Tabs */}
//             <div className="flex items-center gap-2 overflow-x-auto border-b border-slate-200 pb-2 no-scrollbar">
//               {tabs.map((tab) => {
//                 const Icon = tab.icon;
//                 const isActive = activeTab === tab.id;
//                 return (
//                   <button
//                     key={tab.id}
//                     onClick={() => setActiveTab(tab.id)}
//                     className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all sm:text-sm ${
//                       isActive 
//                         ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
//                         : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
//                     }`}
//                   >
//                     <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
//                     <span>{tab.label}</span>
//                   </button>
//                 );
//               })}
//             </div>

//             {/* ================= TAB 1: PRODUCT DETAILS ================= */}
//             {activeTab === 'overview' && (
//               <div className="space-y-6">
//                 <section className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-8">
//                   <div className="flex items-center gap-2.5">
//                     <div className="h-5 w-1.5 rounded-full bg-blue-600" />
//                     <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
//                       About This Product
//                     </h2>
//                   </div>
//                   <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-slate-600 sm:text-[15px]">
//                     {product.description || "High quality options customized to suit your requirements. Contact us for direct setup, prices, and guidance."}
//                   </p>
//                 </section>

//                 {/* Available Types / Variants */}
//                 {product.variants && (
//                   <section className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-8">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <SlidersHorizontal className="h-4 w-4 text-blue-600" />
//                         <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
//                           {product.variantsTitle || "Available Types / Models"}
//                         </h3>
//                       </div>
//                       <span className="text-[11px] font-semibold text-slate-400">Click to select</span>
//                     </div>

//                     <div className="mt-4 flex flex-wrap gap-2.5">
//                       {Array.isArray(product.variants) ? (
//                         product.variants.map((variant, index) => {
//                           const isSelected = selectedVariant === variant;
//                           return (
//                             <button
//                               key={index}
//                               type="button"
//                               onClick={() => setSelectedVariant(isSelected ? '' : variant)}
//                               className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-semibold transition-all ${
//                                 isSelected 
//                                   ? 'border-blue-600 bg-blue-50/80 text-blue-900 ring-2 ring-blue-600/20 shadow-xs' 
//                                   : 'border-slate-200/90 bg-slate-50/70 text-slate-700 hover:border-slate-300 hover:bg-white'
//                               }`}
//                             >
//                               <span className={`h-2 w-2 rounded-full ${isSelected ? 'bg-blue-600' : 'bg-slate-300'}`} />
//                               <span>{variant}</span>
//                             </button>
//                           );
//                         })
//                       ) : (
//                         <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700">
//                           {String(product.variants)}
//                         </div>
//                       )}
//                     </div>
//                   </section>
//                 )}
//               </div>
//             )}

//             {/* ================= TAB 2: KEY FEATURES ================= */}
//             {activeTab === 'features' && (
//               <section className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-8">
//                 <div className="flex items-center gap-2.5">
//                   <div className="h-5 w-1.5 rounded-full bg-emerald-600" />
//                   <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
//                     What Makes This Product Great
//                   </h2>
//                 </div>

//                 <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
//                   {Array.isArray(product.features) && product.features.length > 0 ? (
//                     product.features.map((feature, index) => (
//                       <div
//                         key={index}
//                         className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-slate-50/60 p-4 transition-all hover:border-blue-200 hover:bg-white hover:shadow-sm"
//                       >
//                         <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-100/80 text-emerald-700">
//                           <CheckCircle2 className="h-4 w-4" />
//                         </div>
//                         <div>
//                           <span className="text-xs font-bold text-slate-900 sm:text-sm">{feature}</span>
//                           <p className="mt-0.5 text-[11px] text-slate-500">Tested and verified for dependable performance.</p>
//                         </div>
//                       </div>
//                     ))
//                   ) : (
//                     <p className="text-xs text-slate-500">Detailed features available upon request.</p>
//                   )}
//                 </div>
//               </section>
//             )}

//             {/* ================= TAB 3: AVAILABLE BRANDS ================= */}
//             {activeTab === 'brands' && (
//               <section className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-8">
//                 <div className="flex items-center gap-2.5">
//                   <div className="h-5 w-1.5 rounded-full bg-indigo-600" />
//                   <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
//                     Available Brands
//                   </h2>
//                 </div>
//                 <p className="mt-2 text-xs text-slate-500">
//                   Select your favorite brand. All brands come with original company warranty and bill.
//                 </p>

//                 <div className="mt-6">
//                   {Array.isArray(product.brands) && product.brands.length > 0 ? (
//                     <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
//                       {product.brands.map((brand, index) => {
//                         const isBrandActive = selectedBrand === brand;
//                         return (
//                           <button
//                             key={index}
//                             onClick={() => setSelectedBrand(isBrandActive ? '' : brand)}
//                             className={`flex flex-col items-center justify-center rounded-2xl border p-4 text-center transition-all ${
//                               isBrandActive 
//                                 ? 'border-blue-600 bg-blue-50/70 text-blue-950 shadow-sm ring-2 ring-blue-600/20' 
//                                 : 'border-slate-200/90 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50/50'
//                             }`}
//                           >
//                             <Building2 className={`h-5 w-5 ${isBrandActive ? 'text-blue-600' : 'text-slate-400'}`} />
//                             <span className="mt-2 text-xs font-bold sm:text-sm">{brand}</span>
//                             <span className="text-[10px] text-slate-400">Available</span>
//                           </button>
//                         );
//                       })}
//                     </div>
//                   ) : (
//                     <p className="text-xs font-semibold text-slate-500 italic">
//                       Multiple top brands available in stock.
//                     </p>
//                   )}
//                 </div>
//               </section>
//             )}

//             {/* ================= TAB 4: SERVICE & WARRANTY ================= */}
//             {activeTab === 'service' && (
//               <section className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-8">
//                 <div className="flex items-center gap-2.5">
//                   <div className="h-5 w-1.5 rounded-full bg-amber-500" />
//                   <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
//                     Installation, Warranty &amp; Service
//                   </h2>
//                 </div>

//                 <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
//                   <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4">
//                     <Clock className="h-5 w-5 text-blue-600" />
//                     <h4 className="mt-2 text-sm font-bold text-slate-900">Fast Service</h4>
//                     <p className="mt-1 text-xs text-slate-500">Quick technician visits and prompt troubleshooting whenever needed.</p>
//                   </div>
//                   <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4">
//                     <ShieldCheck className="h-5 w-5 text-emerald-600" />
//                     <h4 className="mt-2 text-sm font-bold text-slate-900">Original Warranty</h4>
//                     <p className="mt-1 text-xs text-slate-500">Full manufacturer warranty with 100% genuine parts guarantee.</p>
//                   </div>
//                   <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4">
//                     <Wrench className="h-5 w-5 text-indigo-600" />
//                     <h4 className="mt-2 text-sm font-bold text-slate-900">Annual Maintenance</h4>
//                     <p className="mt-1 text-xs text-slate-500">Optional yearly maintenance (AMC) plans for hassle-free performance.</p>
//                   </div>
//                 </div>
//               </section>
//             )}

//           </div>

//           {/* ================= RIGHT 4-COLUMNS: INQUIRY SIDEBAR ================= */}
//           <div className="lg:col-span-4 lg:sticky lg:top-20">
//             <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-7">
              
//               {/* Header Badge */}
//               <div className="flex items-center justify-between">
//                 <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-bold tracking-wider text-blue-700">
//                   <Sparkles className="h-3 w-3" />
//                   Quick Price Quote
//                 </span>
//                 <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
//               </div>

//               <h3 className="mt-4 text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
//                 Get Best Price
//               </h3>
//               <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
//                 Contact us for exact pricing, bundle discounts, site visits, and recommendations tailored to your setup.
//               </p>

//               {/* Realtime Selection Summary */}
//               {(selectedBrand || selectedVariant) && (
//                 <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/50 p-3 text-xs space-y-1">
//                   <span className="font-bold text-blue-900 uppercase text-[10px] tracking-wide">Selected Options:</span>
//                   {selectedVariant && <div className="text-slate-700">Type: <strong>{selectedVariant}</strong></div>}
//                   {selectedBrand && <div className="text-slate-700">Brand: <strong>{selectedBrand}</strong></div>}
//                 </div>
//               )}

//               {/* Service Highlights List */}
//               <div className="mt-5 space-y-3 border-y border-slate-100 py-4 text-xs font-semibold text-slate-700">
//                 <div className="flex items-center gap-2.5">
//                   <ShieldCheck className="h-4 w-4 text-emerald-600" />
//                   <span>Official Brand Warranty</span>
//                 </div>
//                 <div className="flex items-center gap-2.5">
//                   <Building2 className="h-4 w-4 text-blue-600" />
//                   <span>Doorstep Delivery &amp; Setup</span>
//                 </div>
//                 <div className="flex items-center gap-2.5">
//                   <CheckCircle2 className="h-4 w-4 text-indigo-600" />
//                   <span>Repair &amp; Service Support</span>
//                 </div>
//               </div>

//               {/* Call-to-Action Buttons */}
//               <div className="mt-6 flex flex-col gap-3">
//                 <button
//                   type="button"
//                   onClick={() => setIsOpen(true)}
//                   className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 active:scale-[0.98]"
//                 >
//                   <span>Inquire on WhatsApp</span>
//                   <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
//                 </button>

//                 <a
//                   href="tel:+919414157713"
//                   className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-slate-200/90 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-2xs transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 active:scale-[0.98]"
//                 >
//                   <Phone className="h-4 w-4 text-blue-600" />
//                   <span>Call Us Directly</span>
//                 </a>
//               </div>

//             </div>
//           </div>

//         </div>
//       </main>

//       {/* ================= INQUIRY MODAL ================= */}
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
//           <div 
//             className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl transition-all animate-in fade-in zoom-in-95 duration-200"
//             role="dialog"
//             aria-modal="true"
//           >
//             {/* Modal Header */}
//             <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-6 py-5">
//               <div>
//                 <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600">Quick Inquiry</span>
//                 <h3 className="text-lg font-bold text-slate-900">{product.title}</h3>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setIsOpen(false)}
//                 className="rounded-xl p-1.5 text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition-colors"
//               >
//                 <X className="h-5 w-5" />
//               </button>
//             </div>

//             {/* Modal Form */}
//             <form onSubmit={handleInquirySubmit} className="p-6 space-y-4">
              
//               {/* Type / Variant Selector */}
//               {product.variants && (
//                 <div>
//                   <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
//                     Select Type / Model (Optional)
//                   </label>
//                   {Array.isArray(product.variants) ? (
//                     <select
//                       value={selectedVariant}
//                       onChange={(e) => setSelectedVariant(e.target.value)}
//                       className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 shadow-2xs focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
//                     >
//                       <option value="">-- Choose Type / Model --</option>
//                       {product.variants.map((variantName, idx) => (
//                         <option key={idx} value={variantName}>{variantName}</option>
//                       ))}
//                     </select>
//                   ) : (
//                     <input
//                       type="text"
//                       placeholder="e.g. Standard Model"
//                       value={selectedVariant}
//                       onChange={(e) => setSelectedVariant(e.target.value)}
//                       className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 shadow-2xs focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
//                     />
//                   )}
//                 </div>
//               )}

//               {/* Brand Selector */}
//               {Array.isArray(product.brands) && product.brands.length > 0 ? (
//                 <div>
//                   <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
//                     Select Preferred Brand *
//                   </label>
//                   <select
//                     value={selectedBrand}
//                     onChange={(e) => setSelectedBrand(e.target.value)}
//                     className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 shadow-2xs focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
//                     required
//                   >
//                     <option value="">-- Choose Brand --</option>
//                     {product.brands.map((brandName, idx) => (
//                       <option key={idx} value={brandName}>{brandName}</option>
//                     ))}
//                   </select>
//                 </div>
//               ) : (
//                 <div>
//                   <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
//                     Preferred Brand (Optional)
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="e.g. Panasonic, Matrix, Hikvision, Exide"
//                     value={selectedBrand}
//                     onChange={(e) => setSelectedBrand(e.target.value)}
//                     className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 shadow-2xs focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
//                   />
//                 </div>
//               )}

//               {/* Requirement Details */}
//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
//                   Your Requirements / Note (Optional)
//                 </label>
//                 <textarea
//                   rows="3"
//                   placeholder="e.g. Quantity needed, installation required, or specific model inquiry..."
//                   value={modelNumber}
//                   onChange={(e) => setModelNumber(e.target.value)}
//                   className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-2xs focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
//                 />
//               </div>

//               {/* Action Buttons */}
//               <div className="mt-6 flex items-center gap-3 pt-2">
//                 <button
//                   type="button"
//                   onClick={() => setIsOpen(false)}
//                   className="flex-1 rounded-xl border border-slate-200 bg-white py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-xs font-bold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700 active:scale-[0.98] transition-all"
//                 >
//                   <Send className="h-3.5 w-3.5" />
//                   <span>Send on WhatsApp</span>
//                 </button>
//               </div>

//             </form>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// };

// export default ProductModel;


import { useParams, Link } from 'react-router-dom';
import { getProducts } from '../../api/products';
import { useEffect, useState } from 'react';
import { 
  Phone, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  Building2, 
  Send, 
  X,
  Wrench,
  Clock,
  FileText,
  SlidersHorizontal,
  ImageIcon
} from 'lucide-react';


const ProductModel = () => {
  const { category } = useParams();
  
  const [catalogData, setCatalogData] = useState({});
const [loading, setLoading] = useState(true);

useEffect(() => {
  getProducts()
    .then((data) => {
      // console.log("PRODUCT DETAILS DATA FROM BACKEND:", data);
      setCatalogData(data);
    })
    .catch((error) => {
      console.error("Failed to load product details:", error);
    })
    .finally(() => {
      setLoading(false);
    });
}, []);

const product = category ? catalogData[category] : null;
// console.log("CATEGORY:", category);
// console.log("CATALOG DATA:", catalogData);
// console.log("CURRENT PRODUCT:", product);
  // Local states
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'features' | 'brands' | 'service'
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('');
  const [modelNumber, setModelNumber] = useState('');
  const [activeGalleryIdx, setActiveGalleryIdx] = useState(0);
if (loading) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-slate-500">Loading product details...</p>
    </div>
  );
}
  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50/70 px-4 pt-24 pb-12 text-slate-700 antialiased">
        <div className="w-full max-w-md rounded-3xl border border-slate-200/90 bg-white p-8 text-center shadow-xl shadow-slate-900/5">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-inner">
            <Layers className="h-7 w-7" />
          </div>
          <h2 className="mt-5 text-xl font-bold text-slate-950">Category Not Found</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            The product category "{category}" is not available in our catalog.
          </p>
          <Link 
            to="/ProductCatelog" 
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-blue-700 active:scale-[0.98]"
          >
            <span>Back to Products</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  // Sanitize gallery images: filter out empty strings ("") or missing paths
  const rawGallery = Array.isArray(product.gallery) && product.gallery.length > 0
    ? product.gallery
    : [product.bannerImage, product.cardImageCatalog, product.cardImageHome, product.img];

  const galleryImages = rawGallery.filter((url) => typeof url === 'string' && url.trim() !== "");

  // Handle WhatsApp inquiry submission
  const handleInquirySubmit = (e) => {
    e.preventDefault();

    if (product.brands && product.brands.length > 0 && !selectedBrand) {
      alert("Please select a brand.");
      return;
    }

    let rawNumber = import.meta.env.VITE_W_N;
    const cleanNumber = String(rawNumber || '').replace(/[+\s-]/g, "");

    const message = `*PRODUCT INQUIRY*\n` +
                    `--------------------------------------\n` +
                    `*Category:* ${product.title || 'Product'}\n` +
                    `*Selected Type / Variant:* ${selectedVariant || 'Standard / Any'}\n` +
                    `*Brand Required:* ${selectedBrand || 'Any Brand'}\n` +
                    `*Requirements / Notes:* ${modelNumber || 'Need advice and price details'}\n` +
                    `--------------------------------------\n` +
                    `Please share the best price quote and installation details.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    
    // Close modal & reset fields
    setIsOpen(false);
    setSelectedBrand('');
    setSelectedVariant('');
    setModelNumber('');
  };

  const tabs = [
    { id: 'overview', label: 'Product Details', icon: FileText },
    { id: 'features', label: 'Key Features', icon: CheckCircle2 },
    { id: 'brands', label: 'Available Brands', icon: Building2 },
    { id: 'service', label: 'Service & Warranty', icon: ShieldCheck }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fafcff] pt-20 pb-20 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
      
      {/* ================= BREADCRUMB NAVIGATION ================= */}
      <div className="border-b border-slate-200/70 bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-1.5 text-xs font-semibold text-slate-500">
            <Link to="/" className="transition-colors hover:text-blue-600">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <Link to="/ProductCatelog" className="transition-colors hover:text-blue-600">Products</Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="font-bold text-slate-950 truncate max-w-[200px] sm:max-w-none">{product.title}</span>
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <div className="flex items-center gap-1.5 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-3 py-1 text-[11px] font-bold text-emerald-800">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              In Stock &amp; Ready for Installation
            </div>
          </div>
        </div>
      </div>

      {/* ================= HERO HEADER ================= */}
      <header className="relative border-b border-slate-200/70 bg-white py-10 sm:py-12">
        <div 
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_70%,transparent_100%)]" 
          aria-hidden="true" 
        />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-bold tracking-wider text-blue-800 shadow-2xs">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              Top Quality Services
            </span>
            {/* <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              100% Original Guarantee
            </span> */}
          </div>

          <div className="mt-5 grid grid-cols-1 items-end justify-between gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                {product.title || "Product Details"}
              </h1>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Complete solutions including genuine products, expert installation, and reliable after-sales service for homes, offices, and businesses.
              </p>
            </div>

            {/* Quick Benefits Strip */}
            <div className="flex flex-wrap gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 shadow-2xs backdrop-blur-xs lg:col-span-4 lg:justify-end">
              <div>
                <div className="text-lg font-black text-slate-900">AMC</div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase"> Support</div>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <div className="text-lg font-black text-emerald-600">100%</div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase">Original Items</div>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <div className="text-lg font-black text-blue-600">30+ Yrs</div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start xl:gap-12">
          
          {/* LEFT 8-COLUMNS */}
          <div className="space-y-8 lg:col-span-8">
            
            {/* Banner Image Container */}
            {product.bannerImage && typeof product.bannerImage === 'string' && product.bannerImage.trim() !== "" && (
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-2.5 shadow-xl shadow-slate-900/5">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-900">
                  <img
                    src={product.bannerImage}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white sm:bottom-6 sm:left-6 sm:right-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Perfect System</span>
                      <h4 className="text-base font-bold sm:text-xl">{product.title}</h4>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md">
                      <ShieldCheck className="h-5 w-5 text-emerald-300" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Product Images Gallery (4-5 images per product) */}
            {galleryImages.length > 0 && (
              <section className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <ImageIcon className="h-5 w-5 text-blue-600" />
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                     Images
                  </h3>
                </div>

                {/* Primary Preview Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-100 bg-slate-100">
                  <img
                    src={galleryImages[activeGalleryIdx] || galleryImages[0]}
                    alt={`${product.title} view ${activeGalleryIdx + 1}`}
                    className="h-full w-full object-cover transition-all duration-300"
                  />
                </div>

                {/* Thumbnails Row */}
                {galleryImages.length > 1 && (
                  <div className="mt-3.5 grid grid-cols-4 sm:grid-cols-5 gap-2.5">
                    {galleryImages.map((imgSrc, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveGalleryIdx(idx)}
                        className={`relative aspect-square overflow-hidden rounded-xl border-2 transition-all ${
                          activeGalleryIdx === idx
                            ? 'border-blue-600 ring-2 ring-blue-600/20 scale-[0.98]'
                            : 'border-slate-200/90 hover:border-slate-300 opacity-75 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={imgSrc}
                          alt={`Thumbnail ${idx + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </section>
            )}

            {/* Section Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto border-b border-slate-200 pb-2 no-scrollbar">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all sm:text-sm ${
                      isActive 
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
                        : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* ================= TAB 1: PRODUCT DETAILS ================= */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <section className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-8">
                  <div className="flex items-center gap-2.5">
                    <div className="h-5 w-1.5 rounded-full bg-blue-600" />
                    <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                      About This Product
                    </h2>
                  </div>
                  <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                    {product.description || "High quality options customized to suit your requirements. Contact us for direct setup, prices, and guidance."}
                  </p>
                </section>

                {/* Available Types / Variants */}
                {product.variants && (
                  <section className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <SlidersHorizontal className="h-4 w-4 text-blue-600" />
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          {product.variantsTitle || "Available Types / Models"}
                        </h3>
                      </div>
                      <span className="text-[11px] font-semibold text-slate-400">Click to select</span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {Array.isArray(product.variants) ? (
                        product.variants.map((variant, index) => {
                          const isSelected = selectedVariant === variant;
                          return (
                            <button
                              key={index}
                              type="button"
                              onClick={() => setSelectedVariant(isSelected ? '' : variant)}
                              className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-semibold transition-all ${
                                isSelected 
                                  ? 'border-blue-600 bg-blue-50/80 text-blue-900 ring-2 ring-blue-600/20 shadow-xs' 
                                  : 'border-slate-200/90 bg-slate-50/70 text-slate-700 hover:border-slate-300 hover:bg-white'
                              }`}
                            >
                              <span className={`h-2 w-2 rounded-full ${isSelected ? 'bg-blue-600' : 'bg-slate-300'}`} />
                              <span>{variant}</span>
                            </button>
                          );
                        })
                      ) : (
                        <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700">
                          {String(product.variants)}
                        </div>
                      )}
                    </div>
                  </section>
                )}
              </div>
            )}

            {/* ================= TAB 2: KEY FEATURES ================= */}
            {activeTab === 'features' && (
              <section className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-8">
                <div className="flex items-center gap-2.5">
                  <div className="h-5 w-1.5 rounded-full bg-emerald-600" />
                  <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                    What Makes This Product Great
                  </h2>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {Array.isArray(product.features) && product.features.length > 0 ? (
                    product.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-slate-50/60 p-4 transition-all hover:border-blue-200 hover:bg-white hover:shadow-sm"
                      >
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-100/80 text-emerald-700">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-900 sm:text-sm">{feature}</span>
                          <p className="mt-0.5 text-[11px] text-slate-500">Tested and verified for dependable performance.</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-slate-500">Detailed features available upon request.</p>
                  )}
                </div>
              </section>
            )}

            {/* ================= TAB 3: AVAILABLE BRANDS ================= */}
            {activeTab === 'brands' && (
              <section className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-8">
                <div className="flex items-center gap-2.5">
                  <div className="h-5 w-1.5 rounded-full bg-indigo-600" />
                  <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                    Available Brands
                  </h2>
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  Select your favorite brand. All brands come with original company warranty and bill.
                </p>

                <div className="mt-6">
                  {Array.isArray(product.brands) && product.brands.length > 0 ? (
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {product.brands.map((brand, index) => {
                        const isBrandActive = selectedBrand === brand;
                        return (
                          <button
                            key={index}
                            onClick={() => setSelectedBrand(isBrandActive ? '' : brand)}
                            className={`flex flex-col items-center justify-center rounded-2xl border p-4 text-center transition-all ${
                              isBrandActive 
                                ? 'border-blue-600 bg-blue-50/70 text-blue-950 shadow-sm ring-2 ring-blue-600/20' 
                                : 'border-slate-200/90 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50/50'
                            }`}
                          >
                            <Building2 className={`h-5 w-5 ${isBrandActive ? 'text-blue-600' : 'text-slate-400'}`} />
                            <span className="mt-2 text-xs font-bold sm:text-sm">{brand}</span>
                            <span className="text-[10px] text-slate-400">Available</span>
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-xs font-semibold text-slate-500 italic">
                      Multiple top brands available in stock.
                    </p>
                  )}
                </div>
              </section>
            )}

            {/* ================= TAB 4: SERVICE & WARRANTY ================= */}
            {activeTab === 'service' && (
              <section className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-8">
                <div className="flex items-center gap-2.5">
                  <div className="h-5 w-1.5 rounded-full bg-amber-500" />
                  <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                    Installation, Warranty &amp; Service
                  </h2>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <h4 className="mt-2 text-sm font-bold text-slate-900">Fast Service</h4>
                    <p className="mt-1 text-xs text-slate-500">Quick technician visits and prompt troubleshooting whenever needed.</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4">
                    <ShieldCheck className="h-5 w-5 text-emerald-600" />
                    <h4 className="mt-2 text-sm font-bold text-slate-900">Original Warranty</h4>
                    <p className="mt-1 text-xs text-slate-500">Full manufacturer warranty with 100% genuine parts guarantee.</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4">
                    <Wrench className="h-5 w-5 text-indigo-600" />
                    <h4 className="mt-2 text-sm font-bold text-slate-900">Annual Maintenance</h4>
                    <p className="mt-1 text-xs text-slate-500">Optional yearly maintenance (AMC) plans for hassle-free performance.</p>
                  </div>
                </div>
              </section>
            )}

          </div>

          {/* ================= RIGHT 4-COLUMNS: INQUIRY SIDEBAR ================= */}
          <div className="lg:col-span-4 lg:sticky lg:top-20">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-7">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-bold tracking-wider text-blue-700">
                  <Sparkles className="h-3 w-3" />
                  Quick Price Quote
                </span>
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              </div>

              <h3 className="mt-4 text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
                Get Best Price
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
                Contact us for exact pricing, bundle discounts, site visits, and recommendations tailored to your setup.
              </p>

              {/* Realtime Selection Summary */}
              {(selectedBrand || selectedVariant) && (
                <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/50 p-3 text-xs space-y-1">
                  <span className="font-bold text-blue-900 uppercase text-[10px] tracking-wide">Selected Options:</span>
                  {selectedVariant && <div className="text-slate-700">Type: <strong>{selectedVariant}</strong></div>}
                  {selectedBrand && <div className="text-slate-700">Brand: <strong>{selectedBrand}</strong></div>}
                </div>
              )}

              {/* Service Highlights List */}
              <div className="mt-5 space-y-3 border-y border-slate-100 py-4 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>Manufacturer Warranty as Per Brand Terms</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Building2 className="h-4 w-4 text-blue-600" />
                  <span>Doorstep Delivery &amp; Setup</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600" />
                  <span>Repair &amp; Service Support</span>
                </div>
              </div>

              {/* Call-to-Action Buttons */}
              <div className="mt-6 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 active:scale-[0.98]"
                >
                  <span>Inquire on WhatsApp</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <a
                  href="tel:+919414157713"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-slate-200/90 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-2xs transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 active:scale-[0.98]"
                >
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span>Call Us Directly</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* ================= INQUIRY MODAL ================= */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div 
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl transition-all animate-in fade-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-6 py-5">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600">Quick Inquiry</span>
                <h3 className="text-lg font-bold text-slate-900">{product.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-xl p-1.5 text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleInquirySubmit} className="p-6 space-y-4">
              
              {/* Type / Variant Selector */}
              {product.variants && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Select Type / Model (Optional)
                  </label>
                  {Array.isArray(product.variants) ? (
                    <select
                      value={selectedVariant}
                      onChange={(e) => setSelectedVariant(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 shadow-2xs focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    >
                      <option value="">-- Choose Type / Model --</option>
                      {product.variants.map((variantName, idx) => (
                        <option key={idx} value={variantName}>{variantName}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      placeholder="e.g. Standard Model"
                      value={selectedVariant}
                      onChange={(e) => setSelectedVariant(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 shadow-2xs focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  )}
                </div>
              )}

              {/* Brand Selector */}
              {Array.isArray(product.brands) && product.brands.length > 0 ? (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Select Preferred Brand *
                  </label>
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 shadow-2xs focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Preferred Brand (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Panasonic, Matrix, Hikvision, Exide"
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 shadow-2xs focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              )}

              {/* Requirement Details */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Your Requirements / Note (Optional)
                </label>
                <textarea
                  rows="3"
                  placeholder="e.g. Quantity needed, installation required, or specific model inquiry..."
                  value={modelNumber}
                  onChange={(e) => setModelNumber(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-2xs focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 rounded-xl border border-slate-200 bg-white py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-xs font-bold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700 active:scale-[0.98] transition-all"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Send on WhatsApp</span>
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
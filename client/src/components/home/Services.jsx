// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion, useAnimation } from 'framer-motion';
// import { Helmet } from 'react-helmet-async';
// import { Shield, Phone, BatteryCharging, Network, Flame, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// const Services = ({ isProductsPage = false }) => {
//   const navigate = useNavigate();

//   // IDs mapped directly to your catalogData object keys
//   const baseCapabilities = [
//     {
//       id: "epbax-system",
//       title: "EPBAX & Intercom System",
//       badge: "Communication Solutions",
//       icon: <Phone className="w-5 h-5 text-indigo-600" />,
//       desc: "Seamless internal communication and efficient call management for businesses.",
//       offerings: [
//         "Analog & Digital EPBAX",
//         "IP & Hybrid PBX Solutions",
//         "Conference Support",
//         "Centralized Communication"
//       ],
//       image: "/catelogPageImages/epbax.png"
//     },
//     {
//       id: "inverters",
//       title: "Power Inverters & Batteries",
//       badge: "Power Backup",
//       icon: <BatteryCharging className="w-5 h-5 text-amber-600" />,
//       desc: "Premium backup power solutions tailored to secure uninterrupted performance.",
//       offerings: ["Sine Wave Inverters", "Automatic Grid Switching", "Solar Inverters (On/Off-Grid)"],
//       image: "/catelogPageImages/inverter.webp"
//     },
//     {
//       id: "cctv-cameras",
//       title: "CCTV & Security Systems",
//       badge: "Security Solutions",
//       icon: <Shield className="w-5 h-5 text-blue-600" />,
//       desc: "Professional CCTV surveillance solutions with full setup, maintenance, and support.",
//       offerings: ["HD & IP CCTV Cameras", "Mobile Monitoring & NVR", "Night Vision & PTZ"],
//       image: "/catelogPageImages/cctv-image.jpg"
//     },
//     {
//       id: "computers-laptops",
//       title: "Computers, Laptops & Servers",
//       badge: "IT Infrastructure",
//       icon: <Network className="w-5 h-5 text-cyan-600" />,
//       desc: "High-performance data computing systems, enterprise network hosting, and workspace terminals.",
//       offerings: ["Commercial Workstations", "Enterprise Laptops", "Server Setup & Deployment"],
//       image: "/catelogPageImages/ComputerLaptops.png"
//     },
//     {
//       id: "fire-systems",
//       title: "Fire & Safety Systems",
//       badge: "Safety Solutions",
//       icon: <Flame className="w-5 h-5 text-rose-600" />,
//       desc: "Advanced fire detection and protection solutions for homes, offices, and industries.",
//       offerings: ["Smoke & Heat Detectors", "Instant Siren Alarms", "Fire Panels & Safety Networks"],
//       image: "/catelogPageImages/fire_system.png"
//     },
//     {
//       id: "video-door-phone",
//       title: "Video Door Phone & Access",
//       badge: "Access Control",
//       icon: <Shield className="w-5 h-5 text-emerald-600" />,
//       desc: "See, speak, and verify visitors before granting access with real-time video security.",
//       offerings: ["IP & Analog Video Units", "Color Display Intercoms", "Two-Way Audio Verification"],
//       image: "/catelogPageImages/video_door_phone.png"
//     }
//   ];

//   const capabilities = [...baseCapabilities, ...baseCapabilities, ...baseCapabilities];
//   const [centerIndex, setCenterIndex] = useState(baseCapabilities.length);
//   const containerRef = useRef(null);
//   const controls = useAnimation();

//   const getCardWidth = () => {
//     if (!containerRef.current) return 380;
//     const width = containerRef.current.offsetWidth;
//     if (window.innerWidth >= 1024) return width / 3;
//     if (window.innerWidth >= 768) return width / 2;
//     return width;
//   };

//   const updatePosition = async (targetIndex, animate = true) => {
//     const cardWidth = getCardWidth();
//     const containerWidth = containerRef.current?.offsetWidth || 0;
//     const centerOffset = (containerWidth - cardWidth) / 2;
//     const targetX = -(targetIndex * cardWidth) + centerOffset;

//     if (animate) {
//       await controls.start({
//         x: targetX,
//         transition: { type: "spring", stiffness: 100, damping: 20 }
//       });
//     } else {
//       controls.set({ x: targetX });
//     }

//     if (targetIndex >= baseCapabilities.length * 2) {
//       const normalIndex = targetIndex - baseCapabilities.length;
//       setCenterIndex(normalIndex);
//       updatePosition(normalIndex, false);
//     } else if (targetIndex < baseCapabilities.length) {
//       const normalIndex = targetIndex + baseCapabilities.length;
//       setCenterIndex(normalIndex);
//       updatePosition(normalIndex, false);
//     }
//   };

//   useEffect(() => {
//     updatePosition(centerIndex, true);
//   }, [centerIndex]);

//   useEffect(() => {
//     const handleResize = () => updatePosition(centerIndex, false);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [centerIndex]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCenterIndex((prev) => prev + 1);
//     }, 4500);
//     return () => clearInterval(interval);
//   }, []);

//   // Clicking a card either centers it or navigates directly to its catalog category
//   const handleCardClick = (index, categoryId) => {
//     if (index === centerIndex) {
//       navigate(`/product/${categoryId}`);
//     } else {
//       setCenterIndex(index);
//     }
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Perfect System - Services & Solutions</title>
//         <meta
//           name="description"
//           content="Explore IT, CCTV surveillance, power backup, and intercom networking solutions from Perfect System."
//         />
//       </Helmet>

//       <section className="w-full bg-slate-50 py-20 relative overflow-hidden" id="services">
//         <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
//           {/* Header */}
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
//               What We Do
//             </h2>
//             <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-xl mx-auto font-medium leading-relaxed">
//               From architecture design and precise component installations to proactive field maintenance and verified spares support.
//             </p>
//           </div>

//           {/* Carousel Track */}
//           <div className="relative w-full overflow-visible py-4" ref={containerRef}>
//             <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none hidden md:block" />
//             <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none hidden md:block" />

//             <div className="overflow-visible">
//               <motion.div className="flex" animate={controls} style={{ touchAction: 'pan-y' }}>
//                 {capabilities.map((item, index) => {
//                   const isSpotlight = index === centerIndex;

//                   return (
//                     <div 
//                       key={`${item.id}-${index}`}
//                       className="shrink-0 p-4 overflow-visible"
//                       style={{ width: getCardWidth() }}
//                     >
//                       <motion.div
//                         onClick={() => handleCardClick(index, item.id)}
//                         animate={{
//                           scale: isSpotlight ? 1.05 : 0.94,
//                           y: isSpotlight ? -10 : 0,
//                           borderColor: isSpotlight ? '#3b82f6' : '#e2e8f0',
//                           opacity: isSpotlight ? 1 : 0.6,
//                           boxShadow: isSpotlight 
//                             ? '0 25px 30px -5px rgb(59 130 246 / 0.12), 0 10px 10px -5px rgb(0 0 0 / 0.04)' 
//                             : '0 4px 6px -1px rgb(0 0 0 / 0.03)'
//                         }}
//                         transition={{ type: "spring", stiffness: 120, damping: 20 }}
//                         className="bg-white border rounded-2xl flex flex-col justify-between h-[450px] overflow-hidden cursor-pointer group relative z-10"
//                       >
//                         {/* Top Media Frame */}
//                         <div className="relative w-full h-44 overflow-hidden bg-slate-900 shrink-0 rounded-t-2xl">
//                           <img 
//                             src={item.image} 
//                             alt={item.title} 
//                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                           />
//                           <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors" />
                          
//                           <span className="absolute top-3 right-3 text-[11px] font-black uppercase tracking-widest text-slate-900 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm border border-slate-200/50">
//                             {item.badge}
//                           </span>

//                           <div className="absolute top-3 left-3 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-sm border border-slate-200/50 z-20 transition-transform duration-300 group-hover:scale-110">
//                             {item.icon}
//                           </div>
//                         </div>

//                         {/* Bottom Description */}
//                         <div className="p-6 flex-1 flex flex-col justify-between bg-white rounded-b-2xl">
//                           <div>
//                             <h3 className="text-lg font-black text-slate-900 tracking-wide uppercase mb-2.5 group-hover:text-blue-600 transition-colors line-clamp-1">
//                               {item.title}
//                             </h3>
                            
//                             <p className="text-sm text-slate-600 font-medium leading-relaxed mb-4 line-clamp-2">
//                               {item.desc}
//                             </p>
                            
//                             <ul className="space-y-2">
//                               {item.offerings.slice(0, 2).map((offering, idx) => (
//                                 <li key={idx} className="text-sm text-slate-500 font-semibold flex items-center gap-2 line-clamp-1">
//                                   <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
//                                   {offering}
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>

//                           {/* Direct Catalog Link CTA */}
//                           <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
//                             <Link 
//                               to={`/ProductDetails/${item.id}`} 
//                               onClick={(e) => e.stopPropagation()} 
//                               className="inline-flex items-center gap-1.5 hover:underline"
//                             >
//                               View Catalog Models <ArrowRight className="w-3.5 h-3.5" />
//                             </Link>
//                           </div>
//                         </div>
//                       </motion.div>
//                     </div>
//                   );
//                 })}
//               </motion.div>
//             </div>
//           </div>

//           {/* Dots & Nav Buttons */}
//           <div className="flex justify-center items-center gap-4 mt-10">
//             <button 
//               onClick={() => setCenterIndex((prev) => prev - 1)} 
//               className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-500 flex items-center justify-center shadow-sm transition-all active:scale-95"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <div className="flex gap-2">
//               {baseCapabilities.map((_, idx) => {
//                 const normalizedCurrent = centerIndex % baseCapabilities.length;
//                 return (
//                   <button 
//                     key={idx} 
//                     onClick={() => setCenterIndex(idx + baseCapabilities.length)} 
//                     className={`h-2 rounded-full transition-all duration-300 ${idx === normalizedCurrent ? 'w-6 bg-blue-600' : 'w-2 bg-slate-200'}`} 
//                   />
//                 );
//               })}
//             </div>
//             <button 
//               onClick={() => setCenterIndex((prev) => prev + 1)} 
//               className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-500 flex items-center justify-center shadow-sm transition-all active:scale-95"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>

//           {!isProductsPage && (
//             <div className="mt-12 text-center">
//               <Link 
//                 to="/productCatelog" 
//                 className="inline-flex items-center gap-2 px-8 py-4 bg-slate-950 hover:bg-slate-850 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all hover:scale-105"
//               >
//                 View Full Catalog
//               </Link>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Services;

// //-------------------------------------------------------------------
// // import React, { useState, useEffect, useRef } from 'react';
// // import { Link } from 'react-router-dom';
// // import { motion, useAnimation } from 'framer-motion';
// // import { Shield, Phone, BatteryCharging, Sun, Network, Flame, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// // const Services = ({ isProductsPage = false }) => {
// //   // Base 6 items configuration
// //   const baseCapabilities = [
// //     
// //     {
// //       id: "communication",
// //       title: "EPABX & Intercom Systems",
// //       badge: "Communication Solutions",
// //       icon: <Phone className="w-5 h-5 text-indigo-600" />,
// //       desc: "Professional EPABX and intercom systems for seamless internal communication.",
// //       offerings: ["Digital EPABX Systems", "Office Intercom Networks", "Call Management Solutions"],
// //       image: "/catelogPageImages/epbax.png"
// //     },
// //     {
// //       id: "power",
// //       title: "UPS, Inverters & Batteries",
// //       badge: "Power Backup",
// //       icon: <BatteryCharging className="w-5 h-5 text-amber-600" />,
// //       desc: "Reliable power backup solutions for homes, offices and industrial facilities.",
// //       offerings: ["Online UPS Systems", "Pure Sine Wave Inverters", "Industrial & Solar Batteries"],
// //       image: "/catelogPageImages/inverter.webp"
// //     },
// //     {
// //       id: "security",
// //       title: "CCTV & Security Systems",
// //       badge: "Security",
// //       icon: <Shield className="w-5 h-5 text-blue-600" />,
// //       desc: "Supply, installation and maintenance of CCTV surveillance systems for homes, offices, banks, schools and industries.",
// //       offerings: ["HD & IP CCTV Cameras", "DVR / NVR Recording Systems", "Remote Mobile Monitoring"],
// //       image: "/catelogPageImages/cctv-image.jpg"
// //     },
// //     {
// //       id: "solar",
// //       title: "Solar Energy Solutions",
// //       badge: "Renewable Energy",
// //       icon: <Sun className="w-5 h-5 text-emerald-600" />,
// //       desc: "Cost-effective solar power systems for residential, commercial and industrial use.",
// //       offerings: ["On-Grid Solar Systems", "Off-Grid Solar Systems", "Solar Panels & Accessories"],
// //       image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80"
// //     },
// //     {
// //       id: "networking",
// //       title: "Networking & Server Solutions",
// //       badge: "IT Infrastructure",
// //       icon: <Network className="w-5 h-5 text-cyan-600" />,
// //       desc: "Complete networking, Wi-Fi and server infrastructure solutions.",
// //       offerings: ["Structured Cabling", "Wi-Fi & Leased Line Setup", "Server Installation & Management"],
// //       image: "/catelogPageImages/network.png"
// //     },
// //     {
// //       id: "fire",
// //       title: "Fire Alarm & Safety Systems",
// //       badge: "Safety Solutions",
// //       icon: <Flame className="w-5 h-5 text-rose-600" />,
// //       desc: "Advanced fire detection and alarm systems for maximum safety and compliance.",
// //       offerings: ["Fire Alarm Panels", "Smoke & Heat Detectors", "Emergency Safety Systems"],
// //       image: "/catelogPageImages/fire_system.png"
// //     }
// //   ];

// //   const capabilities = [...baseCapabilities, ...baseCapabilities, ...baseCapabilities];
// //   const [centerIndex, setCenterIndex] = useState(baseCapabilities.length);
// //   const containerRef = useRef(null);
// //   const controls = useAnimation();

// //   const getCardWidth = () => {
// //     if (!containerRef.current) return 380;
// //     const width = containerRef.current.offsetWidth;
// //     if (window.innerWidth >= 1024) return width / 3;
// //     if (window.innerWidth >= 768) return width / 2;
// //     return width;
// //   };

// //   const updatePosition = async (targetIndex, animate = true) => {
// //     const cardWidth = getCardWidth();
// //     const containerWidth = containerRef.current?.offsetWidth || 0;
// //     const centerOffset = (containerWidth - cardWidth) / 2;
// //     const targetX = -(targetIndex * cardWidth) + centerOffset;

// //     if (animate) {
// //       await controls.start({
// //         x: targetX,
// //         transition: { type: "spring", stiffness: 100, damping: 20 }
// //       });
// //     } else {
// //       controls.set({ x: targetX });
// //     }

// //     if (targetIndex >= baseCapabilities.length * 2) {
// //       const normalIndex = targetIndex - baseCapabilities.length;
// //       setCenterIndex(normalIndex);
// //       updatePosition(normalIndex, false);
// //     } else if (targetIndex < baseCapabilities.length) {
// //       const normalIndex = targetIndex + baseCapabilities.length;
// //       setCenterIndex(normalIndex);
// //       updatePosition(normalIndex, false);
// //     }
// //   };

// //   useEffect(() => {
// //     updatePosition(centerIndex, true);
// //   }, [centerIndex]);

// //   useEffect(() => {
// //     const handleResize = () => updatePosition(centerIndex, false);
// //     window.addEventListener('resize', handleResize);
// //     return () => window.removeEventListener('resize', handleResize);
// //   }, [centerIndex]);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCenterIndex((prev) => prev + 1);
// //     }, 4500);
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <section className="w-full bg-slate-50 py-20 relative overflow-hidden" id="services">
// //       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// //         
// //         {/* Headings */}
// //         <div className="text-center max-w-3xl mx-auto mb-16">
// //           <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
// //             What We Do
// //           </h2>
// //           <p className="mt-3 text-xs sm:text-sm text-slate-500 max-w-xl mx-auto font-medium leading-relaxed">
// //             From architecture design and precise component installations to proactive field maintenance and verified spares support.
// //           </p>
// //         </div>

// //         {/* TRACK CONTAINER */}
// //         <div className="relative w-full overflow-visible py-4" ref={containerRef}>
// //           <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none hidden md:block" />
// //           <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none hidden md:block" />

// //           <div className="overflow-visible">
// //             <motion.div className="flex" animate={controls} style={{ touchAction: 'pan-y' }}>
// //               {capabilities.map((item, index) => {
// //   const isSpotlight = index === centerIndex;

// //   return (
// //     <div 
// //       key={`${item.id}-${index}`}
// //       className="shrink-0 p-4 overflow-visible"
// //       style={{ width: getCardWidth() }}
// //     >
// //       <motion.div
// //         onClick={() => setCenterIndex(index)}
// //         animate={{
// //           scale: isSpotlight ? 1.05 : 0.94,
// //           y: isSpotlight ? -10 : 0,
// //           borderColor: isSpotlight ? '#3b82f6' : '#e2e8f0',
// //           opacity: isSpotlight ? 1 : 0.5,
// //           boxShadow: isSpotlight 
// //             ? '0 25px 30px -5px rgb(59 130 246 / 0.12), 0 10px 10px -5px rgb(0 0 0 / 0.04)' 
// //             : '0 4px 6px -1px rgb(0 0 0 / 0.03)'
// //         }}
// //         transition={{ type: "spring", stiffness: 120, damping: 20 }}
// //         className="bg-white border rounded-2xl flex flex-col justify-between h-[410px] overflow-hidden cursor-pointer group relative z-10"
// //       >
// //         {/* 1. Top Image Frame */}
// //         <div className="relative w-full h-44 overflow-hidden bg-slate-900 shrink-0 rounded-t-2xl">
// //           <img 
// //             src={item.image} 
// //             alt={item.title} 
// //             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
// //           />
// //           <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors" />
// //           
// //           {/* Floating Metadata Tag (Right Side) */}
// //           <span className="absolute top-3 right-3 text-[9px] font-black uppercase tracking-widest text-slate-900 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-sm border border-slate-200/50">
// //             {item.badge}
// //           </span>

// //           {/* Premium Floating Icon (FIXED: Moved to the Top-Left of the image container out of the text's way) */}
// //           <div className="absolute top-3 left-3 w-9 h-9 bg-white/95 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-sm border border-slate-200/50 z-20 transition-transform duration-300 group-hover:scale-110">
// //             {item.icon}
// //           </div>
// //         </div>

// //         {/* 2. Bottom Info Section (FIXED: Text now takes up 100% width cleanly with pt-5) */}
// //         <div className="p-5 flex-1 flex flex-col justify-between bg-white rounded-b-2xl">
// //           <div>
// //             <h3 className="text-sm font-black text-slate-900 tracking-wide uppercase mb-2 group-hover:text-blue-600 transition-colors line-clamp-1 ">
// //               {item.title}
// //             </h3>
// //             
// //             <p className="text-xs text-slate-400 font-medium leading-relaxed mb-3 line-clamp-2">
// //               {item.desc}
// //             </p>
// //             
// //             <ul className="space-y-1">
// //               {item.offerings.slice(0, 2).map((offering, idx) => (
// //                 <li key={idx} className="text-[11px] text-slate-500 font-semibold flex items-start gap-1.5 line-clamp-1">
// //                   <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
// //                   {offering}
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-blue-600 group-hover:text-blue-500">
// //             
// //           </div>
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // })}
// //             </motion.div>
// //           </div>
// //         </div>

// //         {/* Navigation Dots Controls */}
// //         <div className="flex justify-center items-center gap-4 mt-10">
// //           <button onClick={() => setCenterIndex((prev) => prev - 1)} className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-500 flex items-center justify-center shadow-sm transition-all active:scale-95">
// //             <ChevronLeft className="w-4 h-4" />
// //           </button>
// //           <div className="flex gap-1.5">
// //             {baseCapabilities.map((_, idx) => {
// //               const normalizedCurrent = centerIndex % baseCapabilities.length;
// //               return (
// //                 <button 
// //                   key={idx} 
// //                   onClick={() => setCenterIndex(idx + baseCapabilities.length)} 
// //                   className={`h-1.5 rounded-full transition-all duration-300 ${idx === normalizedCurrent ? 'w-5 bg-blue-600' : 'w-1.5 bg-slate-200'}`} 
// //                 />
// //               );
// //             })}
// //           </div>
// //           <button onClick={() => setCenterIndex((prev) => prev + 1)} className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-500 flex items-center justify-center shadow-sm transition-all active:scale-95">
// //             <ChevronRight className="w-4 h-4" />
// //           </button>
// //         </div>

// //         {!isProductsPage && (
// //           <div className="mt-12 text-center">
// //             <Link 
// //               to="/productCatelog" 
// //               className="inline-flex items-center gap-2 px-8 py-4 bg-slate-950 hover:bg-slate-850 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all hover:scale-105"
// //             >
// //               View Our Catelog Page
// //             </Link>
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Services; 

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Phone, 
  BatteryCharging, 
  Network, 
  Flame, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { getProducts } from '../../api/products';

const Services = ({ isProductsPage = false }) => {
  const navigate = useNavigate();
  const [catalogData, setCatalogData] = useState({});

  useEffect(() => {
    getProducts()
      .then((data) => {
        setCatalogData(data || {});
      })
      .catch((error) => {
        console.error("Failed to load services products:", error);
      });
  }, []);

  // Retrieve Cloudinary URL from API response with fallback
  const getCloudinaryImage = (id, fallback) => {
    const product = catalogData?.[id];
    if (product) {
      return (
        product.cardImageHome || 
        product.cardImageCatalog || 
        product.cardImage || 
        product.img || 
        fallback
      );
    }
    return fallback;
  };

  const baseCapabilities = useMemo(() => [
    {
      id: "epbax-system",
      title: "EPABX & Intercom System",
      badge: "Telecom Solutions",
      icon: <Phone className="w-5 h-5 text-blue-700" />,
      accentColor: "blue",
      desc: "Seamless internal communication and efficient call management for modern enterprises.",
      offerings: [
        "Analog & Digital EPABX",
        "IP & Hybrid PBX Solutions",
        "Conference Support",
        "Centralized Routing"
      ],
      image: getCloudinaryImage("epabx-system")
    },
    {
      id: "inverters",
      title: "Power Inverters & Batteries",
      badge: "Power Backup",
      icon: <BatteryCharging className="w-5 h-5 text-amber-600" />,
      accentColor: "amber",
      desc: "Heavy-duty power backup architectures tailored to secure zero-downtime performance.",
      offerings: ["Sine Wave Inverters", "Automatic Grid Switching", "Solar Inverters (On/Off-Grid)"],
      image: getCloudinaryImage("inverters")
    },
    {
      id: "cctv-cameras",
      title: "CCTV & Security Systems",
      badge: "Smart Surveillance",
      icon: <Shield className="w-5 h-5 text-blue-600" />,
      accentColor: "blue",
      desc: "Professional CCTV surveillance solutions with full setup, maintenance, and remote mobile telemetry.",
      offerings: ["HD & IP CCTV Cameras", "Mobile Monitoring & NVR", "Night Vision & PTZ Setup"],
      image: getCloudinaryImage("cctv-cameras")
    },
    {
      id: "computers-laptops",
      title: "Computers, Laptops & Servers",
      badge: "IT Infrastructure",
      icon: <Network className="w-5 h-5 text-teal-600" />,
      accentColor: "teal",
      desc: "High-performance data computing systems, enterprise server hosting, and workspace terminals.",
      offerings: ["Commercial Workstations", "Enterprise Laptops", "Server Setup & Deployment"],
      image: getCloudinaryImage("computers-laptops")
    },
    {
      id: "fire-systems",
      title: "Fire & Safety Systems",
      badge: "Safety Networks",
      icon: <Flame className="w-5 h-5 text-red-600" />,
      accentColor: "red",
      desc: "Advanced fire detection and automated sensor protection for homes, offices, and industries.",
      offerings: ["Smoke & Heat Detectors", "Instant Siren Alarms", "Fire Panels & Safety Networks"],
      image: getCloudinaryImage("fire-systems")
    },
    {
      id: "video-door-phone",
      title: "Video Door Phone & Access",
      badge: "Access Control",
      icon: <Shield className="w-5 h-5 text-emerald-600" />,
      accentColor: "emerald",
      desc: "See, speak, and verify visitors before granting access with real-time video security and smart locks.",
      offerings: ["IP & Analog Video Units", "Color Display Intercoms", "Two-Way Audio Verification"],
      image: getCloudinaryImage("video-door-phone")
    }
  ], [catalogData]);

  const capabilities = useMemo(() => [
    ...baseCapabilities, 
    ...baseCapabilities, 
    ...baseCapabilities
  ], [baseCapabilities]);

  const [centerIndex, setCenterIndex] = useState(baseCapabilities.length);
  const containerRef = useRef(null);
  const controls = useAnimation();

  const getCardWidth = () => {
    if (!containerRef.current) return 380;
    const width = containerRef.current.offsetWidth;
    if (window.innerWidth >= 1024) return width / 3;
    if (window.innerWidth >= 768) return width / 2;
    return width;
  };

  const updatePosition = async (targetIndex, animate = true) => {
    const cardWidth = getCardWidth();
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const centerOffset = (containerWidth - cardWidth) / 2;
    const targetX = -(targetIndex * cardWidth) + centerOffset;

    if (animate) {
      await controls.start({
        x: targetX,
        transition: { type: "spring", stiffness: 100, damping: 20 }
      });
    } else {
      controls.set({ x: targetX });
    }

    if (targetIndex >= baseCapabilities.length * 2) {
      const normalIndex = targetIndex - baseCapabilities.length;
      setCenterIndex(normalIndex);
      updatePosition(normalIndex, false);
    } else if (targetIndex < baseCapabilities.length) {
      const normalIndex = targetIndex + baseCapabilities.length;
      setCenterIndex(normalIndex);
      updatePosition(normalIndex, false);
    }
  };

  useEffect(() => {
    updatePosition(centerIndex, true);
  }, [centerIndex]);

  useEffect(() => {
    const handleResize = () => updatePosition(centerIndex, false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [centerIndex]);

  // Continuous auto-movement loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (index, categoryId) => {
    if (index === centerIndex) {
      navigate(`/ProductDetails/${categoryId}`);
    } else {
      setCenterIndex(index);
    }
  };

  return (
    <>
      <Helmet>
        <title>What We Do | Perfect System Infrastructure &amp; Services</title>
        <meta
          name="description"
          content="Explore telecom, CCTV surveillance, power backup, and intercom networking solutions from Perfect System."
        />
      </Helmet>

      <section className="w-full bg-slate-50/70 py-20 lg:py-24 relative overflow-hidden scroll-mt-20 select-none" id="services">
        
        {/* Ambient Brand Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-blue-600/5 via-emerald-600/5 to-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight uppercase">
              Our Services &amp; Solutions
            </h2>
            <p className="mt-3.5 text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
              Complete solutions from consultation and installation to reliable after-sales service and AMC support.
            </p>
          </div>

          {/* Carousel Track */}
          <div className="relative w-full overflow-visible py-4" ref={containerRef}>
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none hidden md:block" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none hidden md:block" />

            <div className="overflow-visible">
              <motion.div className="flex" animate={controls} style={{ touchAction: 'pan-y' }}>
                {capabilities.map((item, index) => {
                  const isSpotlight = index === centerIndex;

                  return (
                    <div 
                      key={`${item.id}-${index}`}
                      className="shrink-0 p-4 overflow-visible"
                      style={{ width: getCardWidth() }}
                    >
                      <motion.div
                        onClick={() => handleCardClick(index, item.id)}
                        animate={{
                          scale: isSpotlight ? 1.05 : 0.94,
                          y: isSpotlight ? -10 : 0,
                          borderColor: isSpotlight ? '#1d4ed8' : '#e2e8f0',
                          opacity: isSpotlight ? 1 : 0.65,
                          boxShadow: isSpotlight 
                            ? '0 25px 35px -5px rgba(29, 78, 216, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
                            : '0 4px 6px -1px rgba(0, 0, 0, 0.03)'
                        }}
                        transition={{ type: "spring", stiffness: 120, damping: 20 }}
                        className="bg-white border rounded-2xl flex flex-col justify-between h-[460px] overflow-hidden cursor-pointer group relative z-10"
                      >
                        {/* Spotlight Brand Line on Top */}
                        {isSpotlight && (
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-700 via-red-600 to-amber-500 z-30" />
                        )}

                        {/* Top Media Frame (Cloudinary Image with Fade Gradient) */}
                        <div className="relative w-full h-44 overflow-hidden bg-slate-900 shrink-0 rounded-t-2xl">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-slate-950/20 pointer-events-none" />
                          
                          {/* Category Badge */}
                          <span className="absolute top-3.5 right-3.5 text-[10px] font-black uppercase tracking-widest text-slate-900 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm border border-slate-200/60 z-20">
                            {item.badge}
                          </span>

                          {/* Icon Capsule */}
                          <div className="absolute top-3.5 left-3.5 w-10 h-10 bg-white/95 backdrop-blur-md rounded-xl flex items-center justify-center shadow-sm border border-slate-200/60 z-20 transition-transform duration-300 group-hover:scale-110">
                            {item.icon}
                          </div>
                        </div>

                        {/* Bottom Content Body */}
                        <div className="p-6 flex-1 flex flex-col justify-between bg-white rounded-b-2xl">
                          <div>
                            <h3 className="text-base sm:text-lg font-black text-slate-950 tracking-tight uppercase mb-2 group-hover:text-blue-700 transition-colors line-clamp-1">
                              {item.title}
                            </h3>
                            
                            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-4 line-clamp-2">
                              {item.desc}
                            </p>
                            
                            <ul className="space-y-2">
                              {item.offerings.slice(0, 2).map((offering, idx) => (
                                <li key={idx} className="text-xs sm:text-sm text-slate-600 font-semibold flex items-center gap-2 line-clamp-1">
                                  <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                                  <span>{offering}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* CTA Row */}
                          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700 group-hover:text-blue-800">
                            <Link 
                              to={`/ProductDetails/${item.id}`} 
                              onClick={(e) => e.stopPropagation()} 
                              className="inline-flex items-center gap-1.5 hover:underline"
                            >
                              <span>Explore Models</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>

                            <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              <span>AMC Ready</span>
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Dots & Nav Controls */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button 
              type="button"
              onClick={() => setCenterIndex((prev) => prev - 1)} 
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-700 hover:border-blue-400 hover:bg-blue-50/40 flex items-center justify-center shadow-2xs transition-all active:scale-95 cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {baseCapabilities.map((_, idx) => {
                const normalizedCurrent = centerIndex % baseCapabilities.length;
                return (
                  <button 
                    key={idx} 
                    type="button"
                    onClick={() => setCenterIndex(idx + baseCapabilities.length)} 
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === normalizedCurrent ? 'w-6 bg-blue-700' : 'w-2 bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                );
              })}
            </div>

            <button 
              type="button"
              onClick={() => setCenterIndex((prev) => prev + 1)} 
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-700 hover:border-blue-400 hover:bg-blue-50/40 flex items-center justify-center shadow-2xs transition-all active:scale-95 cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Catalog Callout */}
          {!isProductsPage && (
            <div className="mt-14 text-center">
              <Link 
                to="/ProductCatelog" 
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-blue-700/25 transition-all duration-200 hover:shadow-xl hover:shadow-blue-800/35 hover:scale-105 active:scale-95"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Services;